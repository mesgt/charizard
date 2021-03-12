import React from "react";
import LoginForm from "../LoginForm/login";
import SignupForm from "../SignupForm/signup";
import "./formpage.css";

function FormContainer () {
    // return (
    //     <div class="grid-x grid-margin-x container">
    //         <div class="cell auto" />
    //         <div class="cell small-4 login"><LoginForm /></div>
    //         <div class="cell small-4 signup"><SignupForm /></div>
    //         <div class="cell auto" />
    //     </div>
    // )
    return (
        <>
        <LoginForm class="login"/>
        <SignupForm class="signup"/>
        </>
    )
}

export default FormContainer;