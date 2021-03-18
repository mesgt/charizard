const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: true,
  },
  givenName: {
    type: String,
    trim: true,
    // required: true,
  },
  lastName: {
    type: String,
    trim: true,
    // required: true,
  },
  googleId: {
    type: String,
    trim: true,
    required: true,
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: "ToDo",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
