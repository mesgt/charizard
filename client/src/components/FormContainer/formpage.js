import React from "react";
import CreateAccount from "../LoginForm/createAccount";
import Login from "../SignupForm/login";
import "./formpage.css";

function FormContainer (props) {
    return (
        <div class="grid-x form-container">
        <CreateAccount class="login" userInfo={props.userInfo}/>
        <Login class="signup"/>
        </div>
    )
}

export default FormContainer;