const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
  title: { type: String, required: true },
  dueDate: { type: Date, default: Date.now },
  body: String,
  complete: false
});

const ToDo = mongoose.model("ToDo", toDoSchema);

module.exports = ToDo;