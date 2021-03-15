import React from "react";
import "./Check.css";

function CheckBtn(props) {
    return (
        <span className="fa fa-check" {...props} role="button" tabIndex="0">
            
        </span>
    );
}

export default CheckBtn;