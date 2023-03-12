const router = require("express").Router();
const { Activity, Goals, Profile, User } = require("../../Models");

// api/graph route
router.get("/", (req, res) => {
  res.render("graph");
});

router.get("/activities", async (req, res) => {
  try {
    const activities = await Activity.findAll();
    const activityArr = activities.map((a) => a.get({ plain: true }));
    console.log(
      `-----------------------
    This is the array of Data I want to use from the db
    -------------------`,
      activityArr
    );
    res.json(activityArr);
  } catch (err) {
    res.status(500).json("error getting activities", err);
  }
});

router.get("/goals", async (req, res) => {
  try {
    const goals = await Goals.findAll();
    const goalsArr = goals.map((g) => g.get({ plain: true }));
    console.log(goalsArr);
    res.json(goalsArr);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
