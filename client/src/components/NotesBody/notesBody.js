import React, { Component } from "react";

const NotesBody = ({ onUpdateNote, activeNoteData }) => {
    const [title,setTitle] = React.useState("");
    const [body,setBody] = React.useState("");

    const onEditField = (field, target) => {
        console.log(target.id);
        
        if(field === "title"){
            setTitle(target.value)
        }else if(field === "body"){
            setBody(target.value)
        }
        if(target.id === ""){
             onUpdateNote({
            title,
            body
        })
        }else {
            onUpdateNote({
                title,
                body,
                id: target.id
            })
        }

    };

    return (
        <div className="app-main">
            <div className="app-main-note-edit">
            <input
                type="text"
                id={activeNoteData._id}
                placeholder="Note Title"

                value={title || activeNoteData.title}
                onChange={(e) => onEditField("title", e.target)}
                autoFocus
            />
            <textarea
                id="body"
                placeholder="Write your note here..."
                value={activeNoteData.body}
                onChange={(e) => onEditField("body", e.target.value)}
            />
            </div>
        </div>
    );
};

export default NotesBody;