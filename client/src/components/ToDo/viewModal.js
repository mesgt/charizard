import React from "react";
import Modal from "react-modal";

const ViewToDo = ({ open, onClose, onRequestClose, title, body, dueDate, complete, viewModalOpen, viewToggleModal }) => {

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
    // console.log(viewModalOpen);

    return (
        <Modal isOpen={viewModalOpen} onRequestClose={onRequestClose} style={customStyles}>
            <div className="flex-container">
                <div class="grid-x grid-margin-x small-up-5 ">

                    <div className="cell">
                        <div className="card" style={{ minHeight: "380px" }}>
                            <div className="card-section flex-container" width="100%">
                                <div class="grid-x grid-margin-x small-up-5">
                                    <h5>Title: The title goes here{title}</h5>
                                </div>
                                <div class="grid-x grid-margin-x small-up-5">
                                    <p>Details: bla bla bla bla....{body}</p>
                                </div>
                                <div class="grid-x grid-margin-x small-up-5">
                                    <p>Due: ASAP of course{dueDate}</p>
                                </div>
                                <div class="grid-x grid-margin-x small-up-5">
                                    {/* <p>Status: {complete}</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a
                style={{ border: "1px solid white", fontWeight: "bold" }}
                onClick={viewToggleModal}
                class="button primary"
                href="#/">
                Close
                </a>
        </Modal>
    );
};

export default ViewToDo;