import React from "react";
import "./EditBtn.css";

function EditBtn(props) {
    return (
        <span className="fas fa-pencil-alt" {...props} role="button" tabIndex="0">
        </span>
    );
}

export default EditBtn;