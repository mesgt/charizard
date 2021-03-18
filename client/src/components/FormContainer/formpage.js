import React from "react";
import CreateAccount from "../LoginForm/createAccount";
import Login from "../SignupForm/login";
import "./formpage.css";

function FormContainer (props) {
    return (
        <div className="grid-x form-container">
        <CreateAccount className="login" userInfo={props.userInfo}/>
        <Login className="signup" userInfo={props.userInfo}/>
        </div>
    )
}

export default FormContainer;