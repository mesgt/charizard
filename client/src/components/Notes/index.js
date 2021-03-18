import React, { useEffect, useState } from "react";
import "./notes.css";
import Sidebar from "../NotesSidebar/sidebar";
import NotesBody from "../NotesBody/notesBody";
import API from "../../utils/API";

function Notes() {
    const [notes, setNotes] = useState([]);
    const [userNewNote, setUserNewNote] = useState({})
    const [activeNote, setActiveNote] = useState(false);
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
        if(userNewNote.id){
            API.updateOneNoteById(userNewNote.id, {title:userNewNote.title, body:userNewNote.body})
            .then(res => console.log(res))
        }else{
            API.addNote(userNewNote)
            .then(res => console.log(res.data), loadNotes())
            .catch(error => console.log("on add note", error));    
        }
        
    };

    const onDeleteNote = (noteId) => {
        console.log(noteId);
        API.deleteNote(noteId)
            .then(res => console.log(res), loadNotes())
            .catch(error => console.log(error));
    };

    const onUpdateNote = (updatedNote) => {
        console.log(updatedNote);
        setUserNewNote(updatedNote)
    };

    const getActiveNote = (id) => {
        API.getOneNoteById(id)
        .then(res => setActiveNoteData(res.data))
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