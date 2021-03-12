import React from "react";
import { GoogleLogin } from 'react-google-login';
import "./login.css";

function LoginForm() {

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }

    const saveUser = (response) => {
        //post route to save user to DB
    }

    const authenticateUser = (response) => {
        //find user in db
    }

    const redirectToDash = () => {

    }

    const failedLogin = () => {
        alert("Something went wrong, try again.")
    }

    return (
        <>
        <div class="grid-x">
            <div class="logincontainer">
                <div class="log-in-form">
                    <h4 class="text-center loginHeading">Login with Everything</h4>
                    <div class="googleBtn">
                    <GoogleLogin
                        clientId="49214406530-t4ofc8gge6vgfdchf8k6v3e28b883er9.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        isSignedIn={false}
                        onFailure={failedLogin}
                        cookiePolicy={'single_host_origin'}
                        scope="https://www.googleapis.com/auth/calendar.events"
                        redirectUri="http://localhost:3000/dash"
                        uxMode="redirect"
                        />
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}

export default LoginForm;