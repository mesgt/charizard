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
    };

    const onDeleteNote = (noteId) => {
        setNotes(notes.filter(({ id }) => id !== noteId));
    };

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArr = notes.map((note) => {
            if (note.id === updatedNote.id) {
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
            <div className="grid-x grid-margin-x">
                <Sidebar
                    notes={notes}
                    onAddNote={onAddNote}
                    onDeleteNote={onDeleteNote}
                    activeNote={activeNote}
                    setActiveNote={setActiveNote}
                />
                <NotesBody activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
            </div>
        </div>
    )
}

export default Notes;