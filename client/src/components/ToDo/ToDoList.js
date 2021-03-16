import React from "react";
import "./todo.css";

export function List({ children }) {
    return (
        <div className="list-overflow-container">
            <ul>{children}</ul>
        </div>
    );
}

export function ListItem({ children }) {
    return <li class="divider">{children}</li>;
}