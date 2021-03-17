import React from "react";
import "./CompletedBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function CompletedBtn(props) {
    return (
        <button
            style={{ border: "1px solid white", fontWeight: "bold" }}
            // onClick={() => handleOpen()}
            class="button primary"
            // href="#/"
            {...props}
        >
            See Completed
        </button>
    );
}

export default CompletedBtn;