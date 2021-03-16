import React, { useEffect, useState, useRef } from "react";
import "./notes.css";
import API from "../../utils/API";
import SaveBtn from "../SaveBtn/savebtn";
import NewNoteBtn from "../NewNoteBtn/newNoteBtn";
import DeleteNoteBtn from "../DeleteNoteBtn/deleteNoteBtn";

function Notes() {
    const [notes, setNotes] = useState([])

    const [note, setNote] = useState([])

    const [saveBtnState, setSaveBtnState] = useState(false)

    const inputTitleRef = useRef();
    const inputTextRef = useRef();

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
    function saveNote() {
        API.saveNote({
            title: inputTitleRef.current.value,
            body: inputTextRef.current.value
        })
            .then(res => loadNotes())
            .catch(error => console.log(error));
    }
    function newNote() {
        window.location.reload(); //refresh our title and body of Note
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