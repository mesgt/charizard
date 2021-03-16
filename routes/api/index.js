const router = require("express").Router();
const toDoRoutes = require("./todo");
const userRoutes = require("./user")

// To Do routes
router.use("/todo", toDoRoutes);

// Calendar routes


// Note routes


// User routes
router.use("/user", userRoutes);



module.exports = router;