import React, { Component } from "react";

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

// export function CompleteSelect(props) { //change state  ...formObject, todo.complete:true
//     return (
//         <>
//             <h6>Select task status:</h6>
//             <p>
//                 <input
//                     className="form-check-input"
//                     id="To Do"
//                     type="radio"
//                     name="option"
//                     value="notDone"
//                     // checked={this.state.selectedOption === "notDone"}
//                     >
//                 </input>
//                 <label for="To Do"></label>
//                     Still working on it.
//             </p>

//             <p>
//                 <input
//                     className="form-check-input"
//                     id="Done"
//                     type="radio"
//                     name="option"
//                     value="done"
//                     // checked={this.state.selectedOption === "done"}
//                     >
//                 </input>
//                 <label for="Done"></label>
//                     Done!
//             </p>
//         </>
//     )
// }

// export function CompleteStatus(props, complete) {
//     if (complete === false) {
//         return (
//             <>
//                 <h6>{props.children}</h6>
//                 <p>{"Task is still on your To Do List"}</p>
//             </>
//         )
//     } else if (complete === true) {
//         return (
//             <>
//                 <h6>{props.children}</h6>
//                 <p>{"Task is done!"}</p>
//             </>
//         )
//     } else {
//         return (
//             <>
//                 <h6>{props.children}</h6>
//                 <p>{"Status is not available"}</p>
//             </>
//         )
//     }
// }

export function FormBtn(props) {
    return (
        <button {...props} onClick={props.onClick} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
            {props.children}
        </button>
    );
}