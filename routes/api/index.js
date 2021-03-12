const router = require("express").Router();
const toDoRoutes = require("./todo");

// To Do routes
router.use("/todo", toDoRoutes);

// Calendar routes


// Note routes



module.exports = router;