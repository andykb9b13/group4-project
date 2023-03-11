const router = require("express").Router();
const { Activity } = require("../../Models");

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

module.exports = router;
