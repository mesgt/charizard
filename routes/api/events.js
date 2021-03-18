const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/note"
router.route("/").get(eventsController.findAll).post(eventsController.create);

// Matches with "/api/note/:id"
router.route("/:id").get().put().delete();

module.exports = router;
