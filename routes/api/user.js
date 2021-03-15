const router = require("express").Router();
const userController = require("../../controllers/userController")

// Matches with "/api/user"
router.route("/")
    .post(userController.create);

// Matches with "/api/todo/:id"
router.route("/:email")
    .get(userController.findByEmail)
//     .put(todoController.update)
//     .delete(todoController.remove);

module.exports = router;