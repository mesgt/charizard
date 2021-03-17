import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Modal from "react-modal";
import NewToDo from "./newModal";
import EditToDo from "./editModal";
import ViewToDo from "./viewModal";
// import DoneToDo from "./doneModal";
import { List, ListItem } from "./ToDoList";
// import ViewBtn from "../ViewBtn";
import DeleteBtn from "../DeleteBtn";
// import NewBtn from "../NewBtn";
import CheckBtn from "../CheckMark";
// import Form from "./form";
import API from "../../utils/API";
import "./todo.css";
import CompletedBtn from "../CompletedBtn";
Modal.setAppElement("#root");


function ToDos({
    modalIsOpen, setModalIsOpen, complete

}) {
    const [todos, setToDos] = useState([])
    const [formObject, setFormObject] = useState({
        title: "",
        body: "",
        dueDate: "MMDDYY", // THIS NEEDS TO BE CHANGED TO CORRECT FORMAT.
        complete: false
    })
    const [editModalOpen, editToggleModal] = useState(false);
    const [viewModalOpen, viewToggleModal] = useState(false);
    const [newModalOpen, newToggleModal] = useState(false);


    // console.log(todos);

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

    function handleInputChange(event) {
        // console.log(event)
        // const { complete }= event.target
        // setToDos({...todos, [event]: true})
        // .catch(error => console.log(error));
    };
    console.log(todos)
    console.log(todos.complete)

    //When a new task is submitted, use the API.saveToDo and reload To Do tasks
    function handleSubmit(event) {
        event.preventDefault();
        if (formObject.title) {
            API.saveToDo({
                title: formObject.title,
                dueDate: formObject.dueDate,
                body: formObject.body,
                complete: false
            })
                .then(res => 
                    console.log(todos)
                    // loadToDos()
                )
                .catch(err => console.log(err));
        }
    }

    const checkModal = (e) => {
        // console.log(e.currentTarget.dataset.action)
        const action = e.currentTarget.dataset.action
        console.log(action);
        switch (action) {
            case "viewBtn":
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
                ]
            case "newBtn":
                return [
                    modalIsOpen = { newModalOpen },
                    setModalIsOpen = { newToggleModal }
                ]
            default:
                console.log("modalIsOpen/setModalIsOpen not found.")
        }
    }

    return (
        <>
        <div data-closable="fade-out" className="todo" >
            <div className="divider">
                <h4>To Do List</h4>
            </div>
            <div className="section">
                {!!todos && todos.length ? (
                    <List>
                        {todos.map(todo => (
                            <ListItem key={todo._id}
                            >
                                <ViewToDo
                                    action="viewBtn"
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
                                    {todo.title} 
                                    {/* due {todo.dueDate.slice(0, -14)} Date format will be different in mongoDB Atlas. This works for local server. */}
                                </strong>
                                <CheckBtn action="check" onClick={() => editToDo(todo._id)} /> {/* Update this route! It needs to change complete to true. This will put it in a different modal that will display completed tasks. */}
                                {console.log(todo.complete)}
                                <br />
                                {/* Modal to display when click on edit */}
                                <EditToDo
                                    action="editBtn"
                                    modalIsOpen={checkModal}
                                    setModalIsOpen={checkModal}
                                    editModalOpen={editModalOpen}
                                    onChange={handleInputChange}
                                    onClick={handleSubmit}
                                    title={todo.title}
                                    body={todo.body}
                                    dueDate={todo.dueDate}
                                    complete={todo.complete}
                                // disabled={!(formObject.title)}
                                >
                                </EditToDo>
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
                    className="button primary"
                    href="#/">
                    Test
                        </a> */}
                {/* <ToDoDetails
                    onRequestClose={() => setModalIsOpen(false)}
                    open={modalIsOpen}
                    onClose={() => setModalIsOpen(false)} /> */}
            </div>
            {/* <NewBtn>
            
            </NewBtn> */}
        </div>
        <div className="cell">
            <NewToDo
                action="addBtn"
                modalIsOpen={checkModal}
                setModalIsOpen={checkModal}
                newModalOpen={newModalOpen}
                onChange={handleInputChange}
                onClick={handleSubmit}
            // disabled={!(formObject.title)}
            >
            </NewToDo>
            <CompletedBtn />
            {/* <DoneToDo> */}
                {/* Add props to be pushed down to the modal. */}
            {/* </DoneToDo> */}
            </div>
</>
    )
}

export default ToDos;