const router = require("express").Router();
// changed { User } to User and changed /models to /Models/User
const User = require("../../Models/User");
const Activity = require("../../Models/Activitylog");

// api/user route

router.get("/id/:id", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        user_id: req.params.id,
      },
    });
    // const userData = user.map((u) => u.get({ plain: true }));
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// getting all users to send to frontend
router.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json("could not get users", err);
  }
});

router.get("/activities", async (req, res) => {
  const allActivities = await Activity.findAll();
  res.status(200).json(allActivities);
});

// creating a new user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    console.log("This is newUser", newUser);

    req.session.save(() => {
      req.session.userId = newUser.user_id;
      req.session.email = newUser.email;
      req.session.loggedIn = true;

      res.json(newUser);
    });
    // res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// logging in a user
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.user_id;
      req.session.email = user.email;
      req.session.loggedIn = true;

      res.json({ user, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json({ message: "No user account found!" });
  }
});

// ending a user session
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/add/newActivity", async (req, res) => {
  console.log("hitting api/user/newActivity post route");
  console.log("this is the req.session", req.session);
  try {
    await Activity.create({
      user_id: req.session.userId,
      entry_date: req.body.entry_date,
      duration: req.body.duration,
      distance: req.body.distance,
    });
    res.status(200).json("activity created");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
