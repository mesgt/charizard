import React from "react";
import LoginForm from "../LoginForm/login";
import SignupForm from "../SignupForm/signup";
import "./formpage.css";

function FormContainer (props) {
    return (
        <div class="grid-x form-container">
        <LoginForm class="login" userInfo={props.userInfo}/>
        <SignupForm class="signup"/>
        </div>
    )
}

export default FormContainer;