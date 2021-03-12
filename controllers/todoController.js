const db = require("../models");

// Defining methods for todoController
module.exports = {
    // findAll: function (req, res) {
    //     db
    //         .findAll() //finding all users
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    findById: function (req, res) {
        db
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel.todo))
            .catch(err => res.status(422).json(err));
    },
    // create: function (req, res) {
    //     db
    //         .create(req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    update: function (req, res) {
        db
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
    // remove: function (req, res) {
    //     db
    //         .findById(req.params.id)
    //         .then(dbModel => dbModel.remove())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // }
};