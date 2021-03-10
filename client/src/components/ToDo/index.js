import React from "react";
import "./todo.css";

function ToDo() {
    return (
        <div data-closable="fade-out" class="todo-list-card card">
            <div class="card-divider">
                <h3>To Do List</h3>
                <button class="close-button" data-close>x</button>
            </div>
            <div class="card-section">
                <ul>
                    <li><input id="item1" type="checkbox"></input><label for="item1"></label>Item 1</li>
                    <li><input id="item2" type="checkbox"></input><label for="item2"></label>Item 2</li>
                    <li><input id="item3" type="checkbox"></input><label for="item3"></label>Item 3</li>
                </ul>
            </div>
        </div>

    )
}

export default ToDo;