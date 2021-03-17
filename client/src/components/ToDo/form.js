import React from "react";


export function Input(props) {
    return (
        <div className="form-group">
            <label>
                {props.label}
                <input value={props.value} onChange={props.onChange} className="form-control" {...props} />
            </label>

        </div>
    );
}

export function TextArea(props) {
    return (
        <div className="form-group">
            <label>
                {props.label}
                <textarea value={props.value} onChange={props.onChange} className="form-control" rows="10" {...props} />
            </label>
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} onClick={props.handleEditSubmit} onNewClick={props.handleNewSubmit} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
            {props.children}
        </button>
    );
}