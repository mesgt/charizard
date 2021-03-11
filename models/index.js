const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const usersSchema = new Schema({
    user:
    { //login schema:
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
      }, 

      // note schema
      note: {
        title: { 
          type: String, 
          required: true },
        body: { 
          type: String, 
          required: true },
      },
      todo: [
        {
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
          }
        }
      ]
    }
  }
)

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;