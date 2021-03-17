const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema
const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        default: Date.now
    },
    body: String,
    complete: {
        default: false
    },
    // user_ref: {
    //     type: String,
    //     required: true
    // }
})
 //model
const ToDo = mongoose.model("ToDo", todoSchema);

module.exports = ToDo;