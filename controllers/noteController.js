const db = require("../models");
console.log(db);

// Defining methods for NoteController
module.exports = {
    findAll: function (req, res) {
        db.Note
            .find({}) //mongoose function
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    findById: function (req, res) {
        db.Note
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    create: function (req, res) {
        db.Note
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    update: function (req, res) {
        db.Note
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    remove: function (req, res) {
        db.Note
            .findById(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    }
};