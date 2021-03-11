import React from "react";
import Calendar from "../Calendar"
import Nav from "../Nav"
import Notes from "../Notes"
import ToDo from "../ToDo" //this is importing the index.js only.
import Weather from "../Weather"


function Main() {
    return (
        <>
            <div class="grid-x">
                <div class="cell radius bordered shadow card grid-margin-x"><Nav /></div>
            </div>
            <div class="grid-x">
                <div class="cell small-3">
                    <div class="grid-x radius bordered shadow card padding-3"><ToDo /></div>
                    <div class="grid-x radius bordered shadow card padding-3"><Weather /></div>
                </div>
                <div class="cell small-8">
                    <div class="grid-x radius bordered shadow card"><Calendar /></div>
                    <div class="grid-x radius bordered shadow card "><Notes /></div>
                </div>
            </div>
        </>
    )
}

export default Main;