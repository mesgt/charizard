import axios from "axios";

export default {
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
    }
};
