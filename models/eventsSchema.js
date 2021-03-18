const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  title: {
    type: String,
  },
  start: {
    type: String,
  },
  end: {
    type: String,
  },
});

const Events = mongoose.model("Event", eventsSchema);

module.exports = Events;
// const MyEventsList = [
//   {
//     title: "Gwennie's birthday party",
//     start: "date",
//     end: "date",
//     allDay?: false,
//   }
// ]
