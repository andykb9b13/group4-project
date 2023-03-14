const router = require("express").Router();
const { Post } = require("../../models/");
const withAuth = require("../../utils/auth");

// removed withAuth middleware
router.post("/", withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newActivity = await Activity.create({
      ...body,
      userId: req.session.userId,
    });
    res.status(200).json(newActivity);
    alert("New Activity Created!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// removed withAuth middleware
router.put("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// removed withAuth middleware
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
