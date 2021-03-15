const router = require("express").Router();
const toDoRoutes = require("./todo");
const noteRoutes = require("./note");

// To Do routes
router.use("/todo", toDoRoutes);

// Calendar routes


// Note routes
router.use("/note", noteRoutes);


module.exports = router;