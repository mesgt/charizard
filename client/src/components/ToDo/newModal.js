import React, { useState } from "react";
import Modal from "react-modal";
import NewBtn from "../NewBtn";
import { Input, TextArea, FormBtn } from "./form";
// import API from "../../utils/API";
import "./todo.css";

const NewToDo = ({ title, body, dueDate, onRequestClose, handleInputChange, handleNewSubmit, formObject }) => {
    const [isOpen, setIsOpen] = useState(false)
    // const [formObject, setFormObject] = useState({})

    const handleOpen = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    };

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     if (event.title) {
    //         API.saveToDo({
    //             title: formObject.title,
    //             dueDate: formObject.dueDate,
    //             body: formObject.body,
    //             complete: false
    //         })
    //             .then(res => console.log(res))
    //             .catch(err => console.log(err));
    //     }
    // }

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
            <NewBtn
                data-action="addBtn"
                onClick={() => handleOpen()}
            />
            <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} closeTimeoutMS={500}>
                <div className="flex-container">
                    <div className="grid-x grid-margin-x small-up-5 ">
                        <form>
                            <Input
                                onChange={handleInputChange}
                                title="Title"
                                placeholder="Title (required)"
                            />
                            <Input
                                onChange={handleInputChange}
                                dueDate="dueDate"
                                placeholder="Task due date"
                            />
                            <TextArea
                                onChange={handleInputChange}
                                body="Body"
                                placeholder="Details"
                            />
                            <FormBtn
                                // disabled={!(formObject.title)}
                                onClick={handleNewSubmit}
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

export default NewToDo;