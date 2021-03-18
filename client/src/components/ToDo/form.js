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
                <textarea value={props.value} onChange={props.onChange} className="form-control" rows="5" {...props} />
            </label>
        </div>
    );
}

export function CompleteSelect(props) {
    // if()

    return (
    <>
        <p><input id="To Do" type="checkbox"></input><label for="To Do"></label>To Do</p>
        <p><input id="Done" type="checkbox"></input><label for="Done"></label>Done</p>
    </>
    )
}

export function CompleteStatus(props, complete) {
    // if(complete) {
    //     return (
    //         <h6>{props.children}</h6>
    //         )
    // }
    if(complete===false) {
        return (
            <>
            <h6>{props.children}</h6>
            <p>{"Task is still on your To Do List"}</p>
            </>
        )
    } else if(complete===true) {
        return (
            <>
            <h6>{props.children}</h6>
            <p>{"Task is done!"}</p>
            </>
            )
    } else {
        return (
            <>
            <h6>{props.children}</h6>
            <p>{"Status is not available"}</p>
            </>
            )
    }
}

export function FormBtn(props) {
    return (
        <button {...props} onClick={props.onClick} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
            {props.children}
        </button>
    );
}