import React from "react";
import Calendar from "../Calendar";
import Nav from "../Nav";
import Notes from "../Notes";
import ToDo from "../ToDo"; //this is importing the index.js only.
import Weather from "../Weather/index";

function Main() {
  return (
    <>
      <div className="grid-x">
        <div className="cell radius bordered shadow card grid-margin-x">
          <Nav />
        </div>
      </div>
      <div className="grid-x">
        <div className="cell small-3">
          <div className="grid-x radius bordered shadow card padding-3">
            <ToDo />
          </div>
          <div className="grid-x radius bordered shadow card padding-3">
            <Weather />
          </div>
        </div>
        <div className="cell small-8">
          <div className="grid-x radius bordered shadow card">
            <Calendar />
          </div>
          <div className="grid-x radius bordered shadow card ">
            <Notes />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
