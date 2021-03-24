import React from "react";
import "../Notes/notes.css";

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  getActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  const currentNote = (id) => {
    getActiveNote(id);
  };

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <div>
        <h1>Notes</h1>
        </div>
        <div>
        <button onClick={onAddNote}>Add</button>
        </div>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ _id, title, body, lastModified }, i) => (
          <div
            className={`app-sidebar-note ${_id === activeNote && "active"}`}
            onClick={() => currentNote(_id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button onClick={(e) => onDeleteNote(_id)}>Delete</button>
            </div>

            <p>{body && body.substr(0, 100) + "..."}</p>
            {/* <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
