import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import EditToDo from "./editModal";
import ViewToDo from "./viewModal";
import { List, ListItem } from "./ToDoList";
import DeleteBtn from "../DeleteBtn";
import EditBtn from "../EditBtn";
import CheckBtn from "../CheckMark";
import API from "../../utils/API";
import "./todo.css";
Modal.setAppElement("#root");


function ToDos({ 
    modalIsOpen, setModalIsOpen, 
    // editModalOpen, editToggleModal, 
    // viewModalOpen, viewToggleModal 
}) {
    const [todos, setToDos] = useState([])
    // const [formObject, setFormObject] = useState({    })
    const [editModalOpen, editToggleModal] = useState(false);
    const [viewModalOpen, viewToggleModal] = useState(false);

    console.log(todos);
    // console.log(formObject);

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

    //Load modal for each task
    function viewToDo(id) {
        API.getToDos(id)
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }

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

    // function handleInputChange(event) {
    // console.log(formObject.complete)
    // .catch(error => console.log(error));
    // };

    //     const closeModal = (bool) => {
    // console.log(bool);
    // setModalIsOpen(bool)
    //     }
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

    const checkModal = (e) => {
        // console.log(e.currentTarget.dataset.action)
        const action = e.currentTarget.dataset.action
        console.log(action);
        switch (action) {
            case "viewLink":
                viewToggleModal(!viewModalOpen)
                console.log(viewModalOpen);
                return [
                    modalIsOpen = { viewModalOpen },
                    setModalIsOpen = { viewToggleModal }
                ]
            case "editBtn":
                return [
                    modalIsOpen = { editModalOpen },
                    setModalIsOpen = { editToggleModal }
                ];
            default:
                console.log("modalIsOpen/setModalIsOpen not found.")
        }
    }

    return (
        <div data-closable="fade-out" class="todo" >
            <div class="divider">
                <h4>To Do List</h4>
            </div>
            <div class="section">
                {todos.length ? (
                    <List>
                        {todos.map(todo => (
                            <ListItem key={todo._id}
                            >

                                    <ViewToDo
                                        data-action="viewLink"
                                        modalIsOpen={checkModal}
                                        setModalIsOpen={checkModal}
                                        viewModalOpen={viewModalOpen}
                                        title={todo.title}
                                        body={todo.body}
                                        dueDate={todo.dueDate}
                                        complete={todo.complete}
                                    >
                                    </ViewToDo>
                                    <strong>
                                        {todo.title} due {todo.dueDate.slice(0, -14)} {/* Date format will be different in mongoDB Atlas. This works for local server. */}
                                    </strong>

                                <CheckBtn action="check" onClick={() => console.log(todo._id)} /> {/* Update this route! It needs to change complete to true. This will put it in a different modal that will display completed tasks. */}
                                {console.log(todo.data)}
                                <br />
                                <EditBtn
                                    action="editBtn"
                                    onClick={editToggleModal}
                                >
                                    {/* Modal to display when click on edit */}
                                    <EditToDo
                                        action="editBtn"
                                        editModalOpen={editModalOpen}
                                        editToggleModal={editToggleModal}
                                        title={todo.title}
                                        body={todo.body}
                                        dueDate={todo.dueDate}
                                        complete={todo.complete}
                                    >
                                    </EditToDo>
                                </EditBtn>
                                <br />
                                <DeleteBtn onClick={() => deleteToDo(todo._id)} />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <h6>No tasks to display</h6>
                )}

                {/* <a
                    style={{ border: "1px solid white", fontWeight: "bold" }}
                    onClick={() => setModalIsOpen(true)}
                    class="button primary"
                    href="#/">
                    Test
                        </a>
                <ToDoDetails
                    onRequestClose={() => setModalIsOpen(false)}
                    open={modalIsOpen}
                    onClose={() => setModalIsOpen(false)} /> */}
            </div>
        </div>

    )
}

export default ToDos;