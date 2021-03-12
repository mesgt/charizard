const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const usersSchema = new Schema({
 

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
)

const User = mongoose.model("User", usersSchema);

module.exports = User;