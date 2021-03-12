const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: true
    },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required", //on submit check is password exists and if not, require password
        validate: [({ length }) => length >= 6, "Password should be longer."]
    }
}
)

    const User = mongoose.model("User", userSchema);

module.exports = User;