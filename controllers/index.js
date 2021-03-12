module.exports = {
    User: require("./"),//add user controllers reference
    Note: require("./notesSchema"),//add note controllers reference
    ToDo: require("./todoController"),
    Calendar: require("./calendarController")
  }