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
            <div class="cell small-4" />
            <div class="cell small-4 logincontainer">
                <div class="log-in-form">
                    <h4 class="text-center">Signup with Everything</h4>
                    <input type="text" class="log-in-form-firstname" name="firstName" placeholder="First Name" />
                    <input type="text" class="log-in-form-lastname" name="lastName" placeholder="Last Name" />
                    <input type="email" class="log-in-form-email" name="email" placeholder="Email" />
                    <input type="password" class="log-in-form-password" name="password" placeholder="Password" />
                    <input type="submit" class="button log-in-form-button" value="Sign Up" />
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
            {/* <div class="cell small-4 signupcontainer">
                <div class="sign-up-form">
                    <div class="sign-up-stuff">
                    <h4 class="text-center">Sign Up</h4>
                    <input type="submit" class="button expanded log-in-form-button" value="Sign Up" />
                    </div>
                </div>
            </div> */}
        </div>
        
      </>
    )
}

export default LoginForm;