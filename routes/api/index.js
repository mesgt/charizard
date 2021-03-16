const router = require("express").Router();
const toDoRoutes = require("./todo");
const noteRoutes = require("./note");
const userRoutes = require("./user")

// To Do routes
router.use("/todo", toDoRoutes);

// Calendar routes


// Note routes
router.use("/note", noteRoutes);

// User routes
router.use("/user", userRoutes);



module.exports = router;