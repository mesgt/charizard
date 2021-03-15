import React from "react";
import "./notes.css";

function Notes() {
    return (
        <div className="grid-container fluid NoteBox">
            <div className="grid-x grid-margin-x">
                <nav class="navbar navbar-dark bg-dark col-12">
                    <a class="navbar-brand">Note Taker</a>
                    <div class="icons">
                    <i class="fas fa-save text-light save-note"></i>
                    <i class="fas fa-pen text-light new-note"></i>
                    </div>
                </nav>
                <div class="container-fluid">
                    <div class="row">
                    <div class="col-4 list-container">
                        <div class="card">
                        <ul class="list-group">
                        </ul>
                        </div>
                    </div>
                    <div class="col-8">
                        <input class="note-title" placeholder="Note Title" maxlength="28" type="text" />
                        <textarea class="note-textarea" placeholder="Note Text"></textarea>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes;