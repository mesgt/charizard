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
        dueDate: "Mar 18, 2021",
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
    },
    {
        title: "homework",
        dueDate: Date.now,
        body: "Finish Physics homework",
        complete: false
    },
    {
        title: "feed the cats",
        dueDate: Date.now,
        body: "Remember to feed the cats tonight",
        complete: false
    },
    {
        title: "wash the dishes",
        dueDate: Date.now,
        body: "Mom's coming over...don't let her see the mess.",
        complete: false
    },
    {
        title: "pharmacy",
        dueDate: Date.now,
        body: "Buy ibuprofen",
        complete: false
    },
    {
        title: "water plants",
        dueDate: Date.now,
        body: "Don't forget the cactus.",
        complete: false
    },
    {
        title: "car insurance",
        dueDate: Date.now,
        body: "Renew car insurance with Jake from State Farm.",
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