import React from "react";
import { GoogleLogin } from 'react-google-login';
import "./signup.css";

function SignupForm() {

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }

    return (
        <>
        <div class="grid-x">
            <div class="signupcontainer">
                <div class="sign-up-form">
                    <h4 class="text-center createHeading">Create an account with Everything</h4>
                    <div class="sign-up-googleBtn">
                        <GoogleLogin
                            clientId="49214406530-t4ofc8gge6vgfdchf8k6v3e28b883er9.apps.googleusercontent.com"
                            buttonText="Sign Up with Google"
                            onSuccess={responseGoogle}
                            isSignedIn={false}
                            onFailure={responseGoogle}
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

export default SignupForm;