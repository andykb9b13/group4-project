const router = require("express").Router();
const User = require("../Models/User");

// getting the profile page with user info
router.get("/profile", async (req, res) => {
  try {
    console.log(req.session);
    const user = await User.findOne({
      where: {
        user_id: req.session.userId,
      },
    });
    console.log("this is the user", user);
    const userData = user.get({ plain: true });
    // We should get the activity data here maybe and send it to the frontend js?
    res.render("profilecard", { userData });
  } catch (err) {
    console.log("here is profile error", err);
    res.status(500).json(err);
  }
});

router.get("/activity", async (req, res) => {
  try {
    res.render("activitylog");
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/profile", async (req, res) => {
//   try {
//     const activities = await Activity.findAll({
//       where: {
//         user_id: req.session.userId,
//       },
//     });
//     const activityArr = activities.map((a) => a.get({ plain: true }));
//     console.log(activityArr);
//     res.render("activityGraph", activityArr);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/activity", async (req, res) => {
  try {
    res.render("activitylog");
  } catch (err) {
    res.status(500).json(err);
  }
});

// hitting the signup page
router.get("/signup", async (req, res) => {
  try {
    res.status(200).render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

// hitting the login page
router.get("/login", async (req, res) => {
  try {
    res.status(200).render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/log", async (req, res) => {
  try {
    res.status(200).render("activitylog");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
