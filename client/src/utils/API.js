import axios from "axios";

const APIKey = "3a623ea6ade278ada9b6b26990b8755d";

export default {
  weather: function (lat, lon) {
    const BASEURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${APIKey}`;
    return axios.get(BASEURL);
  },
};

// export default {
//   // Gets all books
//   getCalendar: function() {
//     return axios.get("/api/calendar");
//   },
//   // Gets the book with the given id
//   getCalendar: function(id) {
//     return axios.get("/api/calendar/" + id);
//   },
//   // Deletes the book with the given id
//   deleteCalendar: function(id) {
//     return axios.delete("/api/calendar/" + id);
//   },
//   // Saves a book to the database
//   saveCalendar: function(calendarData) {
//     return axios.post("/api/calendar", calendarData);
//   }
// };
