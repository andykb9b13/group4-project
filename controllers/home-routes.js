const router = require("express").Router();
const User = require("../Models/User");

router.get("/profile", async (req, res) => {
  res.render("profilecard");
});

module.exports = router;
