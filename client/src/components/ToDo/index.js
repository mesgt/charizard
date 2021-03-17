import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import ToDoDetails from "./modalDisplay";
import { List, ListItem } from "./ToDoList";
// import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn";
import EditBtn from "../EditBtn";
import CheckBtn from "../CheckMark";
import API from "../../utils/API";
import "./todo.css";
Modal.setAppElement("#root");


function ToDos() {
    const [todos, setToDos] = useState([])
    // const [formObject, setFormObject] = useState({})

    // State for modal to open/close
    const [modalIsOpen, setModalIsOpen] = useState(false);

    //Load all To Do tasks and store them with setToDos
    useEffect(() => {
        loadToDos()
    }, [])

    //Load and display all To Do tasks
    function loadToDos() {
        API.getToDos()

            .then(res => setToDos(res.data))
            .catch(error => console.log(error));

    };

    //Delete To Do task using _id and reload list
    function deleteToDo(id) {
        API.deleteToDo(id)

            .then(res => console.log(res), loadToDos())
            .catch(error => console.log(error));

    };

    //Edit To Do task using _id and reload list
    function editToDo(id) {
        API.editToDo(id)
            .then(res => loadToDos())
            .catch(error => console.log(error));
    }
    //Handles updating component state from user input
    // function handleInputChange(event) {
    //     console.log(event);
    // };

    //When a new task is submitted, use the API.saveToDo and reload To Do tasks
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     if (formObject.title) {
    //         API.saveToDo({
    //             title: formObject.title,
    //             dueDate: formObject.dueDate,
    //             body: formObject.body,
    //             complete: false
    //         })
    //         .then(res => loadToDos())
    //         .catch(err => console.log(err));
    //     }
    // }

    return (
        <div data-closable="fade-out" className="todo">
            <div className="divider">
                <h3>To Do List</h3>
            </div>
            <div className="section">
                {todos.length ? (
                    <List>
                        {todos.map(todo => (
                            <ListItem key={todo._id}>
                                <strong>
                                    {todo.title} due {todo.dueDate.slice(0, -14)} {/* Date format will be different in mongoDB Atlas. This works for local server. */}
                                </strong>
                                <CheckBtn onClick={() => editToDo(todo._id)} /> {/* Update this route! It needs to change complete to true. This will put it in a different modal that will display completed tasks. */}
                                <br />
                                <EditBtn 
                                onClick={() => setModalIsOpen(true)} //needs to trigger 2 functions- open modal and edit task
                                href="#/">
                                    {/* Modal to display when click on edit */}
                                    <ToDoDetails
                                        onRequestClose={() => setModalIsOpen(false)}
                                        open={modalIsOpen}
                                        onClose={() => setModalIsOpen(false)}>
                                    </ToDoDetails>
                                </EditBtn>
                                    <br />
                                    <DeleteBtn onClick={() => deleteToDo(todo._id)} />
                            </ListItem>
                        ))}
                    </List>
                        ) : (
                        <h6>No tasks to display</h6>
                        )}
                        <a
                            style={{ border: "1px solid white", fontWeight: "bold" }}
                            onClick={() => setModalIsOpen(true)}
                            className="button primary"
                            href="#/">
                            Test
                        </a>
                        <ToDoDetails
                            onRequestClose={() => setModalIsOpen(false)}
                            open={modalIsOpen}
                            onClose={() => setModalIsOpen(false)} />
            </div>
        </div>

    )
}

export default ToDos;