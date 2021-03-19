import React from "react";
import "./NewBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function NewBtn(props) {
    return (
            <button
                style={{ border: "1px solid white", fontWeight: "bold" }}
                // onClick={() => handleOpen()}
                class="button primary"
                id="Add_btn"
                // href="#/"
                {...props}
            >
                Add
            </button>
    );
}

export default NewBtn;