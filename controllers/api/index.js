const router = require("express").Router();

// const routeName = require("route file");

// router.use('/routeName', routeName)

const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes");

router.use("/user", userRoutes);
router.use("/post", postRoutes);

module.exports = router;
