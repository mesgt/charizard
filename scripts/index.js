require("dotenv").config();

module.exports = {
    User: require("./userSeed"),
    Note: require("./noteSeed"),
    ToDo: require("./todoSeed")
}