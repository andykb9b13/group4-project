const router = require("express").Router();
const User = require("../Models/User");

router.get("/profile", async (req, res) => {
  res.render("profilecard");
});

// hitting the signup page
router.get("/signup", async (req, res) => {
  res.render("signup");
});

// hitting the login page
router.get("/login", async (req, res) => {
  res.render("login");
});

module.exports = router;
