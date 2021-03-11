const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/everythingApp"
);

//Sample information for To Do List:
const usersSchema = [{
    user:
    {
        email: "test@test.com",
        firstName: "John",
        lastName: "Doe",
        password: "qwer1234",

        // note schema
        note: [{
            title: "Note 1",
            body: "I must learn everything about react.js",
        },
        {
            title: "Note 2",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        ],
        todo: [
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
        ]
    }
}]




        // Exporting Users seed data to MongoDB
        db.Users
            .remove({})
            .then(() => db.Users.collection.insertMany(usersSeed))
            .then(data => {
                console.log(data.result.n + " records inserted!");
                process.exit(0);
            })
            .catch(err => {
                console.error(err);
                process.exit(1);
            });
