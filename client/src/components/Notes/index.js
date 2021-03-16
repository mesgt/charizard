import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./notes.css";
import API from "../../utils/API";


function Notes() {
    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );
    const [activeNote, setActiveNote] = useState(false);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const onAddNote = () => {
        const newNote = {
            id: uuid(),
            title: "Untitled Note",
            body: "",
            lastModified: Date.now(),
        };

        setNotes([newNote, ...notes]);
        setActiveNote(newNote.id);
    }
    

    return (
        <div className="grid-container fluid NoteBox">
            <div className="grid-x grid-margin-x">
                <nav class="navbar navbar-dark bg-dark col-12">
                    <a class="navbar-brand">Note Taker</a>
                    <SaveBtn  />
                    <NewNoteBtn onClick={() => newNote()} />
                </nav>
                <div class="container-fluid">
                    <div class="row">
                    <div class="col-4 list-container">
                        <div class="card">
                        <ul class="list-group">
                            <DeleteNoteBtn />
                        </ul>
                        </div>
                    </div>
                    <div class="col-8">
                        <input class="note-title" ref={inputTitleRef} placeholder="Note Title" maxlength="28" type="text" />
                        <textarea class="note-textarea" ref={inputTextRef} placeholder="Note Text"></textarea>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes;