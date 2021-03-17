import React from "react";
import "./ViewBtn.css";

function ViewBtn(props) {
    return (
        <span className="far fa-eye" {...props} role="button" tabIndex="0">
        </span>
    );
}

export default ViewBtn;