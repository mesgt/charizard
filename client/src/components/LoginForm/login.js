import React from "react";
import { GoogleLogin } from 'react-google-login';
import "./login.css";

function LoginForm() {

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }

    return (
        <>
        <div class="grid-x">
            <div/>
            <div class="logincontainer">
                <div class="log-in-form">
                    <h4 class="text-center">Login with Everything</h4>
                    <input type="email" class="log-in-form-email" name="email" placeholder="Email" />
                    <input type="password" class="log-in-form-password" name="password" placeholder="Password" />
                    <input type="submit" class="button log-in-form-button" value="Login" />
                    <div class="googleBtn">
                        <GoogleLogin
                            clientId="49214406530-t4ofc8gge6vgfdchf8k6v3e28b883er9.apps.googleusercontent.com"
                            buttonText="Sign Up with Google"
                            onSuccess={responseGoogle}
                            isSignedIn={false}
                            onFailure={responseGoogle}
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