import React, { useEffect, useState } from "react";
import "./notes.css";
import Sidebar from "../NotesSidebar/sidebar";
import NotesBody from "../NotesBody/notesBody";
import API from "../../utils/API";

function Notes() {
    const [notes, setNotes] = useState([{
        id: "",
        title: "",
        body: ""
    }]);
        console.log(notes);

    const [activeNote, setActiveNote] = useState(false);

    useEffect(() => {
        loadNotes()
    }, []);

    function loadNotes() {
        API.getNotes()
            .then(res => setNotes(res.data))
            .catch(error => console.log(error));
    };
    console.log(activeNote);
    const onAddNote = () => {
        const newNote = {
            title: "Untitled Note",
            body: "",
        };
        // setNotes([newNote, ...notes]);
        setActiveNote(newNote.id);
        API.addNote(newNote)
            .then(res => console.log(res.data))
            .catch(error => console.log("on add note", error));
    };

    const onDeleteNote = (noteId) => {
        // setNotes(notes.filter(({ id }) => id !== noteId));
        API.deleteNote(noteId)
            .then(res => console.log(res))
            .catch(error => console.log(error));
    };

    // this is constanstly updating a note
    const onUpdateNote = (updatedNote) => {
        const updatedNotesArr = notes.map((note) => {
            if (note.id === updatedNote.id) {
                API.saveNote(updatedNote.id, updatedNote)
                    .then(res => console.log(updatedNote, res))
                    .catch(err => console.log(err));
                return updatedNote;
            }

            return note;
        });

        setNotes(updatedNotesArr);
    };

    const getActiveNote = () => {
        return notes.find(({ id }) => id === activeNote);
    };
    

    return (
        <div className="grid-container fluid NoteBox">
                <Sidebar
                    notes={notes}
                    onAddNote={onAddNote}
                    onDeleteNote={onDeleteNote}
                    activeNote={activeNote}
                    setActiveNote={setActiveNote}
                />
                <NotesBody activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
        </div>
    )
}

export default Notes;