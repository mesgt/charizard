import React from "react";
// import "./Check.css";

function DeleteNoteBtn(props) {
    return (
        <span className="fas fa-trash-alt float-right text-danger delete-note" {...props} role="button" tabIndex="0">
            
        </span>
    );
}

export default DeleteNoteBtn;