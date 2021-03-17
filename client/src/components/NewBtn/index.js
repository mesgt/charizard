import React from "react";
import "./NewBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function NewBtn(props) {
    return (
        <span className="add-btn" {...props} role="button" tabIndex="0">
            Add
        </span>
    );
}

export default NewBtn;