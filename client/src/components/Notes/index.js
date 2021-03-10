import React from "react";
import "./notes.css";

function Notes() {
    return (
        <div class="grid-container fluid NoteBox">
            <div class="grid-x grid-margin-x">
                <div class="cell small-12"> <span class= "NoteHeader">Note Taker</span></div>
            </div>
            <div class="grid-x grid-margin-x">
                <div class="cell small-12"></div>
            </div>
        </div>
    )
}

export default Notes;