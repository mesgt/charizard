import React from "react";
import "./EditBtn.css";

{/* <i class='fas fa-pencil-alt' style='font-size:24px'></i> */}
function EditBtn(props) {
    return (
        <span className="fas fa-pencil-alt" {...props} role="button" tabIndex="0">
            
        </span>
    );
}

export default EditBtn;