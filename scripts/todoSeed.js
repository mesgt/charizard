const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/everythingApp"
)
.catch(err => console.log(err));;

const todoSeed = [
    {
        title: "bakery pickup",
        dueDate: 2021 - 03 - 15,
        body: "Pick up birthday cake from bakery.",
        complete: false
    },
    {
        title: "grocery shopping",
        dueDate: 2021 - 03 - 17,
        body: "Remember to get bananas, apples, and bread.",
        complete: false
    },
    {
        title: "oil change",
        dueDate: 2021 - 03 - 20,
        body: "Use coupon from Groupon for fully synthetic oil change.",
        complete: false
    },
    {
        title: "misc",
        dueDate: 2021 - 03 - 21,
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