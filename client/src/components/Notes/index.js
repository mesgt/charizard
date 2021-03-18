import React, { useEffect, useState } from "react";
import "./notes.css";
import Sidebar from "../NotesSidebar/sidebar";
import NotesBody from "../NotesBody/notesBody";
import API from "../../utils/API";

function Notes() {
    const [notes, setNotes] = useState([]);
    const [userNewNote, setUserNewNote] = useState({})
    const [activeNote, setActiveNote] = useState(false);
    const [id, setId] = useState("");
    const [activeNoteData, setActiveNoteData] = useState({
        title:"",
        body:""
    })

    useEffect(() => {
        loadNotes()
    }, []);

    function loadNotes() {
        API.getNotes()
            .then(res => setNotes(res.data))
            .catch(error => console.log(error));
    };

    const onAddNote = () => {
        // const newNote = {
        //     title: "Untitled Note",
        //     body: "",
        // };
        // setNotes([newNote, ...notes]);
        // setActiveNote(true);
        if(userNewNote.id){
            API.updateOneNoteById(userNewNote.id, {title:userNewNote.title, body:userNewNote.body})
            .then(res => console.log(res))
        }else{
            API.addNote(userNewNote)
            .then(res => console.log(res.data))
            .catch(error => console.log("on add note", error));    
            // console.log(activeNote);
        }
        
    };

    const onDeleteNote = (noteId) => {
        console.log(noteId);
        setNotes(notes.filter(({ id }) => id !== noteId));
        API.deleteNote(noteId)
            .then(res => console.log(res))
            .catch(error => console.log(error));
    };

    // this is constanstly updating a note
    const onUpdateNote = (updatedNote) => {
        console.log(updatedNote);
        setUserNewNote(updatedNote)
        // const updatedNotesArr = notes.map((note) => {
        //     // console.log(note);
        //     if (note.id === updatedNote.id) {
        //         API.saveNote(updatedNote.id, updatedNote)
        //             .then(res => console.log(updatedNote, res), loadNotes())
        //             .catch(err => console.log(err));
        //         return updatedNote;
        //     }

        //     return note;
        // });

        // setNotes(updatedNotesArr);
    };

    const getActiveNote = (id) => {
        // console.log(id);
        API.getOneNoteById(id)
        .then(res => setActiveNoteData(res.data))
        // return notes.find(({ id }) => id === activeNote);
    };
    

    return (
        <div className="grid-container fluid NoteBox">
                <Sidebar
                    notes={notes}
                    onAddNote={onAddNote}
                    onDeleteNote={onDeleteNote}
                    activeNote={activeNote}
                    setActiveNote={setActiveNote}
                    getActiveNote={getActiveNote}
                />
                <NotesBody 
                onUpdateNote={onUpdateNote} 
                activeNoteData={activeNoteData}/>
        </div>
    )
}

export default Notes;