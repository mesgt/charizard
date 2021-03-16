import React from "react";
// import "./Check.css";

function NewNoteBtn(props) {
    return (
        <span className="fas fa-pen text-light new-note" {...props} role="button" tabIndex="0">
            
        </span>
    );
}

export default NewNoteBtn;