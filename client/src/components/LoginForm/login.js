import React from "react";
import "./login.css";

function LoginForm (){
    return (
        <div class="log-in-form">
            <div class="text-center">
                <h4>Log in to Everything</h4>
                <input type="email" placeholder="somebody@example.com" />
                <input type="password" placeholder="Password" />
            <p><input type="submit" class="button expanded" value="Log in"></input></p>
            </div>
        </div>
    )
}

export default LoginForm;