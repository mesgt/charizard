const router = require("express").Router();
const noteController = require("../../controllers/noteController")

// Matches with "/api/todo"
router.route("/")
    .get(noteController.findAll)
    .post(noteController.create);

// Matches with "/api/todo/:id"
router.route("/:id")
    .get(noteController.findById)
    .put(noteController.update)
    .delete(noteController.remove);

module.exports = router;