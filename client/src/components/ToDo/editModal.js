import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import EditBtn from "../EditBtn";
import { Input, TextArea, FormBtn } from "./form";
import API from "../../utils/API";
import "./todo.css";

const EditToDo = ({ id, title, body, dueDate, complete, onRequestClose, loadToDos }) => {
    const [isOpen, setIsOpen] = useState(false)
    // const [titleState, setTitle] = useState("")
    // const [bodyState, setBody] = useState("")
    // const [dueDateState, setDueDate] = useState("")

    const [formObject, setFormObject] = useState({
        id, title, body, dueDate, complete
    })

    useEffect(() => {
        // setTitle(title)
        // setBody(body)
        // setDueDate(dueDate)
        // console.log(titleState, bodyState, dueDateState)
    })
    const handleOpen = () => {
        setIsOpen(!isOpen)
    };

    function editToDo(id) {
        API.editToDo(id)
            .then(res => console.log(res.data), loadToDos())

            .catch(error => console.log(error));
    }

    function handleEditSubmit(event) {
        event.preventDefault();
        // setFormObject(formObject, {
        //     title: event.target.title,
        //     dueDate: event.target.dueDate,
        //     body: event.target.body,
        //     complete: event.target.complete
        // })
        console.log(formObject)
        if (formObject.title) {
            API.editToDo(id, {
                title: formObject.title,
                dueDate: formObject.dueDate,
                body: formObject.body,
                complete: formObject.complete
            }).then(res => console.log(res)
            ).catch(err => console.log(err));
        }
    }

    //Modal style
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            zIndex: 1001,
            transform: "translate(-50%, -50%)",
            maxHeight: "100vh",
            overflowY: "auto",
            backgroundImage: `url("https://cdn.pixabay.com/photo/2017/10/15/08/56/neutral-2852878_960_720.jpg")`,
        },
        overlay: {
            zIndex: 1000,
            backgroundColor: "rgb(72,72,72,.95)",
        },
    };

    return (
        <>
            <EditBtn
                data-action="editBtn"
                onClick={() => handleOpen()}
            />
            <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} closeTimeoutMS={500}>
                <div className="flex-container">
                    <div className="grid-x grid-margin-x small-up-5 todoEdit">
                        <form>
                            <Input
                                onChange={(e) => setFormObject({...formObject, title: e.target.value})}
                                title=""
                                label="title"
                                value={formObject.title}
                                placeholder="Title (required)"
                            />
                            <Input
                                onChange={(e) => setFormObject({...formObject, dueDate: e.target.value})}
                                dueDate=""
                                label="dueDate"
                                value={formObject.dueDate}
                                placeholder="Due Date"
                            />
                            <TextArea
                                onChange={(e) => setFormObject({...formObject, body: e.target.value})}
                                body=""
                                label="body"
                                value={formObject.body}
                                placeholder="Details"
                            />

                            {/* Add checkbox for if the task has been completed. reference it in todo index.js */}

                            <FormBtn
                                // disabled={!(formObject.title)}
                                handleEditSubmit={handleEditSubmit}
                            >
                                Save
                            </FormBtn>
                            <button
                                style={{ border: "1px solid white", fontWeight: "bold" }}
                                onClick={() => handleOpen()}
                                className="button primary"
                                href="#/">
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default EditToDo;