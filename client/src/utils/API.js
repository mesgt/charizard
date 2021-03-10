import axios from "axios";

export default {
  // Gets all books
  getCalendar: function() {
    return axios.get("/api/calendar");
  },
  // Gets the book with the given id
  getCalendar: function(id) {
    return axios.get("/api/calendar/" + id);
  },
  // Deletes the book with the given id
  deleteCalendar: function(id) {
    return axios.delete("/api/calendar/" + id);
  },
  // Saves a book to the database
  saveCalendar: function(calendarData) {
    return axios.post("/api/calendar", calendarData);
  }
};
