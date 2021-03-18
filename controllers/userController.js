const db = require("../models");
console.log(db);

// Defining methods for todoController
module.exports = {
  // findAll: function (req, res) {
  //     db.ToDo
  //         .find({}) //mongoose function
  //         .then(dbModel => res.json(dbModel))
  //         .catch(err => console.log(err));
  // },
  findByEmail: function (req, res) {
    db.User.findOne({ email: req.params.email })
      .populate("events", "todos")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch((err) => console.log(err));
  },
  // update: function (req, res) {
  //     db.ToDo
  //         .findOneAndUpdate({ _id: req.params.id }, req.body)
  //         .then(dbModel => res.json(dbModel))
  //         .catch(err => console.log(err));
  // },
  // remove: function (req, res) {
  //     db.ToDo
  //         .findById(req.params.id)
  //         .then(dbModel => dbModel.remove())
  //         .then(dbModel => res.json(dbModel))
  //         .catch(err => console.log(err));
  // }
};
