import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import NewToDo from "./newModal";
import EditToDo from "./editModal";
import ViewToDo from "./viewModal";
import { List, ListItem } from "./ToDoList";
import DeleteBtn from "../DeleteBtn";
import CheckBtn from "../CheckMark";
import API from "../../utils/API";
import "./todo.css";
import CompletedBtn from "../CompletedBtn";
Modal.setAppElement("#root");

function ToDos({

}) {
    const [todos, setToDos] = useState([])
    const [formObject, setFormObject] = useState({
        id: -1,
        title: "",
        body: "",
        dueDate: "",
        complete: false
    })
    const [editModalOpen, editToggleModal] = useState(false);
    const [viewModalOpen, viewToggleModal] = useState(false);
    const [newModalOpen, newToggleModal] = useState(false);

    //Load all To Do tasks and store them with setToDos
    useEffect(() => { loadToDos() }, [])

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

    const checkModal = (e) => {
        const action = e.currentTarget.dataset.action
        switch (action) {
            case "viewBtn":
                viewToggleModal(!viewModalOpen)
                console.log(viewModalOpen);
                break
            case "editBtn":
                editToggleModal(!editModalOpen)
                console.log(editModalOpen);
                break
            case "newBtn":
                newToggleModal(!newModalOpen)
                console.log(newModalOpen);
                break
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
                                    {/* Modal to display when click on view */}
                                    <ViewToDo
                                        action="viewBtn"
                                        setModalIsOpen={checkModal}
                                        viewModalOpen={viewModalOpen}
                                        title={todo.title}
                                        body={todo.body}
                                        dueDate={todo.dueDate}
                                        complete={todo.complete}
                                    >
                                    </ViewToDo>
                                    <span>
                                        {todo.title}
                                        {/* due {todo.dueDate.slice(0, -14)} Date format will be different in mongoDB Atlas. This works for local server. */}
                                    </span>
                                    <CheckBtn action="check" onClick={(e) => console.log(e)
                                        // setFormObject({ ...formObject, complete: !e.target.value })
                                    } />
                                    <br />
                                    {/* Modal to display when click on edit */}
                                    <EditToDo
                                        action="editBtn"
                                        setModalIsOpen={checkModal}
                                        editModalOpen={editModalOpen}
                                        id={todo._id}
                                        title={todo.title}
                                        body={todo.body}
                                        dueDate={todo.dueDate}
                                        complete={todo.complete}
                                        loadToDos={loadToDos}
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
                </div>
            </div>
            <div className="cell">
                {/* Modal to display when click on Add */}
                <NewToDo
                    action="addBtn"
                    setModalIsOpen={checkModal}
                    newModalOpen={newModalOpen}
                    loadToDos={loadToDos}
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