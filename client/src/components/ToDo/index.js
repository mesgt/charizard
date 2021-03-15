import React, { useEffect, useState }  from "react";
import { List, ListItem } from "./ToDoList";
// import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn"
import API from "../../utils/API";
import "./todo.css";

function ToDos() {
    const [todos, setToDos] = useState([])
    // const [formObject, setFormObject] = useState({})

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
        <div data-closable="fade-out" class="todo">
            <div class="divider">
                <h3>To Do List</h3>
                <button class="close-button" data-close>x</button>
            </div>
            <div class="section">
                {todos.length ? (
                    <List>
                        {todos.map(todo => (
                            <ListItem key={todo._id}>
                                {/* <Button to={"/todo/" + todo._id}> the link may have to be ToDo change this to a button and connect to a modal.  */}
                                    {/* <strong> */}
                                        {todo.title} due {todo.dueDate}
                                    {/* </strong> */}
                                {/* </Button> */}
                                
                                <DeleteBtn onClick={() => deleteToDo(todo._id)} />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <h6>No tasks listed for today</h6>
                )}

                {/* <ul>
                    <li><input id="item1" type="checkbox"></input><label htmlFor="item1"></label>Item 1</li>
                    <li><input id="item2" type="checkbox"></input><label htmlFor="item2"></label>Item 2</li>
                    <li><input id="item3" type="checkbox"></input><label htmlFor="item3"></label>Item 3</li>
                </ul> */}
            </div>
        </div>

    )
}

export default ToDos;