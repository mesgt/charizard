const router = require("express").Router();
const userController = require("../../controllers/userController")

// Matches with "/api/todo"
router.route("/")
    .post(userController.create);

// Matches with "/api/todo/:id"
// router.route("/:id")
//     .get(todoController.findById)
//     .put(todoController.update)
//     .delete(todoController.remove);

module.exports = router;