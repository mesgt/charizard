import React from "react";
import { GoogleLogin } from 'react-google-login';
import "./signup.css";
import { useHistory } from "react-router-dom"
import API from "../../utils/API"

function SignupForm() {

    const history = useHistory();

    const checkUser = (response) => {
        console.log(response.profileObj);
        //check to see if user exists in database
        API.findByEmail(response.profileObj.email)
            .then((res) =>{
                if (response.profileObj.email) {
                    history.push("/dash")
                } else {
                    alert("please create an account")
                };
                console.log("User exists!", res)
            })
            .catch (err => console.log(err));
}


const failedLogin = () => {
    alert("Something went wrong, try again.")
}

return (
    <>
        <div class="grid-x">
            <div />
            <div class="signupcontainer">
                <div class="sign-up-form">
                    <h4 class="text-center createHeading">Create an account with Everything</h4>
                    <div class="sign-up-googleBtn">
                        <GoogleLogin
                            clientId="49214406530-t4ofc8gge6vgfdchf8k6v3e28b883er9.apps.googleusercontent.com"
                            buttonText="Sign in with Google"
                            onSuccess={checkUser}
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

export default SignupForm;