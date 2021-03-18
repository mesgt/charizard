import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ViewBtn from "../ViewBtn";
import API from "../../utils/API";
import "./todo.css";

const ViewToDo = ({ onRequestClose, title, body, dueDate, complete }) => {

    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {setIsOpen(!isOpen)};
    dueDate = dueDate.slice(0, -14)

    // const completeStatus = () => {
    //     console.log(complete)
    //     if(complete===false) {
    //         return ("Task is still on your To Do List")
    //     } else if(complete===true) {
    //         return ("Task is done!")
    //     } else {
    //         return ("Status is not available")
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
        }
        // card: {
        //     width:"100%",
        //     color: "red"
        // }
    };

    return (
        <>
            <ViewBtn
                data-action="viewBtn"
                onClick={() => handleOpen()}
            />

            <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} closeTimeoutMS={500}>
                <div className="flex-container">
                    <div className="grid-x grid-margin-x small-up-5 ">
                        <div className="cell">
                            <div className="card todoView" style={{ minHeight: "380px"}}>
                                <div className="card-section flex-container grid-x">
                                        <h5 className="text-capitalize cell">Title: {title}</h5>
                                        <p className="text-capitalize cell">Details: {body}</p>
                                        <p className="text-capitalize cell">Due: {dueDate}</p>
                                        {/* <p className="text-capitalize cell">Status: {completeStatus()}</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    style={{ border: "1px solid white", fontWeight: "bold" }}
                    onClick={() => handleOpen()}
                    className="button primary"
                    href="#/">
                    Close
                </a>
            </Modal>
        </>
    );
};

export default ViewToDo;