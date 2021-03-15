const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/everythingApp", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const todoSeed = [
    {
        title: "bakery pickup",
        dueDate: Date.now,
        body: "Pick up birthday cake from bakery.",
        complete: false
    },
    {
        title: "grocery shopping",
        dueDate: Date.now,
        body: "Remember to get bananas, apples, and bread.",
        complete: false
    },
    {
        title: "oil change",
        dueDate: Date.now,
        body: "Use coupon from Groupon for fully synthetic oil change.",
        complete: false
    },
    {
        title: "misc",
        dueDate: Date.now,
        body: "",
        complete: false
    }
];


// Exporting Note seed data to MongoDB
db.ToDo
    .remove({})
    .then(() =>
        db.ToDo.collection.insertMany(todoSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });