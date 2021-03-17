import React, { useState } from "react";
import Modal from "react-modal";
import NewBtn from "../NewBtn";
import { Input, TextArea, FormBtn } from "./form";
import "./todo.css";

const NewToDo = ({ title, body, dueDate, onRequestClose, handleInputChange, handleSubmit, formObject }) => {
    const [isOpen, setIsOpen] = useState(false)
    // const [formObject, setFormObject] = useState({})

    const handleOpen = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    };

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
            <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
                <div className="flex-container">
                    <div class="grid-x grid-margin-x small-up-5 ">
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
                                onClick={handleSubmit}
                            >
                                Save
                            </FormBtn>
                            <button
                                style={{ border: "1px solid white", fontWeight: "bold" }}
                                onClick={() => handleOpen()}
                                class="button primary"
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