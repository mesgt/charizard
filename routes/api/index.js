const router = require("express").Router();
const toDoRoutes = require("./todo");
const noteRoutes = require("./note");
const userRoutes = require("./user");
const eventsRoutes = require("./events");

// To Do routes
router.use("/todo", toDoRoutes);

// Calendar routes
router.use("/events", eventsRoutes);

// Note routes
router.use("/note", noteRoutes);

// User routes
router.use("/user", userRoutes);

module.exports = router;
