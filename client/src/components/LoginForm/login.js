import React from "react";
import { GoogleLogin } from 'react-google-login';
import "./login.css";
import { useHistory } from "react-router-dom"

function LoginForm() {

    const history = useHistory();

    const redirect = (response) => {
        console.log(response.profileObj);
        history.push("/dash")
    }

    // const authenticateUser = (response) => {
    //     //find user in db
    // }

    const failedLogin = () => {
        alert("Something went wrong, try again.")
    }

    return (
        <>
            <div class="grid-x">
                <div />
                <div class="logincontainer">
                    <div class="log-in-form">
                        <h4 class="text-center loginHeading">Login with Everything</h4>
                        <input type="email" class="log-in-form-email" name="email" placeholder="Email" />
                        <input type="password" class="log-in-form-password" name="password" placeholder="Password" />
                        <div class="googleBtn">
                            <GoogleLogin
                                clientId="49214406530-t4ofc8gge6vgfdchf8k6v3e28b883er9.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={redirect}
                                isSignedIn={false}
                                onFailure={failedLogin}
                                cookiePolicy={'single_host_origin'}
                                scope="https://www.googleapis.com/auth/calendar.events"
                            />
                        </div>
                    </div>
                </div>
            </div>
         
        </>
    )
}

export default LoginForm;