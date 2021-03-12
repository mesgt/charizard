import React from "react";
import LoginForm from "../LoginForm/login";
import SignupForm from "../SignupForm/signup";
import "./formpage.css";

function FormContainer () {
    return (
        <div class="grid-x form-container">
        <LoginForm class="login"/>
        <SignupForm class="signup"/>
        </div>
    )
}

export default FormContainer;