import axios from "axios";

const APIKey = "3a623ea6ade278ada9b6b26990b8755d";

export default {
  //Recall weather
  weather: function (lat, lon) {
    const BASEURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${APIKey}`;
    return axios.get(BASEURL);
  },
  coordinates: function () {
    const cityURL = `https://api.openweathermap.org/data/2.5/weather?q=anoka&appid=${APIKey}`;
    return axios.get(cityURL);
  },
  // Gets all To Dos
  getToDos: function () {
    return axios.get("/api/todo");
  },
  // Gets the To Do with the given id
  getToDo: function (id) {
    return axios.get("/api/todo/" + id);
  },
  // Deletes the To Do with the given id
  deleteToDo: function (id) {
    return axios.delete("/api/todo/" + id);
  },
  // Saves a To Do to the database
  saveToDo: function (todoData) {
    return axios.post("/api/todo", todoData);
  },
};
