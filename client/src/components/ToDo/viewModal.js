import { PromiseProvider } from "mongoose";
import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./todo.css";

const ViewToDo = ({ open, onClose, onRequestClose, title, body, dueDate, complete, viewModalOpen, viewToggleModal }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
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
        card: {
            width:"100%",
            color: "red"
        }
    };
    // console.log(viewModalOpen);

    return (
        <>
            <Link //button
                data-action="viewLink"
                onClick={() => handleOpen()}
            >{title}
            </Link>

            <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
                <div className="flex-container">
                    <div class="grid-x grid-margin-x small-up-5 ">
                        <div className="cell">
                            <div className="card todoView" style={{ minHeight: "380px"}}>
                                <div className="card-section flex-container grid-x">
                                        <h5 className="text-capitalize cell small-4">Title: {title}</h5>
                                        <p>Details: {body}</p>
                                        <p>Due: {dueDate}</p>
                                    <div class="text-capitalize text-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    style={{ border: "1px solid white", fontWeight: "bold" }}
                    onClick={() => handleOpen()}
                    class="button primary"
                    href="#/">
                    Close
                </a>
            </Modal>
        </>
    );
};

export default ViewToDo;