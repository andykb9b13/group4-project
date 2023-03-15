const router = require("express").Router();
const User = require("../Models/User");
const Profile = require("../Models/Profile");

// getting the profile page with user info
// There's a problem with this function when it get called after signing up.
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

// hitting the activitylog page
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

router.get("/edit", async (req, res) => {
  try {
    res.status(200).render("editprofile");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
