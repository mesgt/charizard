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
            .then(res => loadToDos())
            .catch(error => console.log(error));
    };

    //Edit To Do task using _id and reload list
    function editToDo(id) {
        API.editToDo(id)
            .then(res => console.log(res))
            // loadToDos())
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
    //         .catch(error => console.log(error));
    //     }
    // }

    return (
        <div data-closable="fade-out" class="todo-list-card card">
            <div class="card-divider">
                <h3>To Do List</h3>
            </div>
            <div class="card-section">
                {todos.length ? (
                    <List>
                        {todos.map(todo => (
                            <ListItem key={todo._id}>
                                {/* <Button to={"/todo/" + todo._id}> the link may have to be ToDo change this to a button and connect to a modal.  */}
                                <strong>
                                    {todo.title} due {todo.dueDate.slice(0, -14)}
                                </strong>
                                {/* </Button> */}
                                <CheckBtn onClick={() => editToDo(todo._id)} /> {/* Update this route! */}
                                <br />
                                <EditBtn onClick={() => editToDo(todo._id)} />
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
                    class="button primary"
                    href="#/">
                    Test
                </a>
                <ToDoDetails 
                onRequestClose={() => setModalIsOpen(false)}
                open={modalIsOpen}

                onClose={() => setModalIsOpen(false)}/>
            </div>
        </div>

    )
}

export default ToDos;