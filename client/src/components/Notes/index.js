import React, { useEffect, useState } from "react";
import "./notes.css";
import API from "../../utils/API";
import SaveBtn from "../SaveBtn/savebtn";
import NewNoteBtn from "../NewNoteBtn/newNoteBtn";
import DeleteNoteBtn from "../DeleteNoteBtn/deleteNoteBtn";

function Notes() {
    const [notes, setNotes] = useState([])

    //Load all Note tasks and store them with setToDos
    useEffect(() => {
        loadNotes()
    }, [])

    //Load and display all Note tasks
    function loadNotes() {
        API.getNotes()

            .then(res => setNotes(res.data))
            .catch(error => console.log(error));

    };

    //Delete Note task using _id and reload list
    function deleteNote(id) {
        API.deleteNote(id)

            .then(res => console.log(res), loadNotes())
            .catch(error => console.log(error));

    };

    //Edit Note task using _id and reload list
    function editNote(id) {
        API.editNote(id)
            .then(res => loadNotes())
            .catch(error => console.log(error));
    }
    return (
        <div className="grid-container fluid NoteBox">
            <div className="grid-x grid-margin-x">
                <nav class="navbar navbar-dark bg-dark col-12">
                    <a class="navbar-brand">Note Taker</a>
                    <div class="icons">
                    <SaveBtn onClick={() => saveNote(note)} />
                    <NewNoteBtn onClick={() => newNote(note)} />
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