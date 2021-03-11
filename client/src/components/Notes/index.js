import React from "react";
import "./notes.css";

function Notes() {
    return (
        <div className="grid-container fluid NoteBox">
            <div className="grid-x grid-margin-x">
                <div className="cell small-12"> <span className= "NoteHeader">Note Taker</span></div>
            </div>
            <div className="grid-x grid-margin-x">
                <div className="cell small-12"></div>
            </div>
        </div>
    )
}

export default Notes;