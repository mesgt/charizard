import React from "react";
import Modal from "react-modal";

const ToDoDetails = ({open, onClose, onRequestClose}) => {
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
            // background: "#fff",
            backgroundImage: `url("https://cdn.pixabay.com/photo/2017/10/15/08/56/neutral-2852878_960_720.jpg")`,
        },
        overlay: {
            zIndex: 1000,
            backgroundColor: "rgb(72,72,72,.95)",
        },
    };

    return (
        <Modal isOpen={open} onRequestClose={onRequestClose} style={customStyles}>
            <div className="flex-container">
                <div class="grid-x grid-margin-x small-up-5 ">
                    <h5>Test</h5>
                    <div className="cell">
                        <div className="card" style={{ minHeight: "380px" }}>
                            <div className="card-section">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <a
                    style={{ border: "1px solid white", fontWeight: "bold" }}
                    onClick={onClose}
                    class="button primary"
                    href="#/">
                    Close
                </a>
    </Modal>
    );
};

export default ToDoDetails;