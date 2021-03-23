import React from "react";
import CreateAccount from "../components/LoginForm/createAccount";
import Login from "../components/SignupForm/login";
import "./LoginPage.css"


function LoginPage(props) {
    return (
        <div className="grid-x medium-offset-3 columns">
        <Login className="signup small-12 medium-12 columns" userInfo={props.userInfo}/>
        <CreateAccount className="login medium-pull-1 columns" userInfo={props.userInfo}/>
        </div>
    )
}


export default LoginPage;