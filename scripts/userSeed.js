const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/everythingApp", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const userSeed = [
    {
        email: "test@test.com",
        firstName: "John",
        lastName: "Doe"
        // password: "qwer1234",
    },
    {
        email: "test1@test.com",
        firstName: "Jane",
        lastName: "Doe"
        // password: "asdf1234",
    },
    {
        email: "test2@test.com",
        firstName: "Little",
        lastName: "Doe"
        // password: "zxcv1234",
    },
];


// Exporting User seed data to MongoDB
db.User
    .remove({})
    .then(() =>
        db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });