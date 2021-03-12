import React from "react";
import LoginForm from "../LoginForm/login";
import SignupForm from "../SignupForm/signup";
import "./formpage.css";

function FormContainer () {
    return (
        <div class="grid-x form-container">
        <LoginForm class="cell medium-6 login"/>
        <SignupForm class="cell medium-6 signup"/>
        </div>
    )
}

export default FormContainer;