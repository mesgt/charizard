import { GoogleLogin } from 'react-google-login';
import "./login.css";
import { useHistory } from "react-router-dom"
import API from "../../utils/API"
import React, { useState, useEffect } from "react";
// import UserContext from "../../utils/UserContext"

function LoginForm(props) {
    const history = useHistory();

    const redirect = (response) => {
        console.log("response", response)
        console.log(response.profileObj);
        history.push("/dash")
        props.userInfo(response.profileObj)
        createUser(response);
    }

    const createUser = (response) => {
        console.log(response);
        API.createUser({
            email: response.profileObj.email,
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            googleId: response.profileObj.googleId
        })
            .then((res) => {

                console.log("User created!", res.data._id)
                // setUserState({ ...userState, 
                //     id: res.data._id, 
                //     firstName: res.data.firstName, 
                //     email: res.data.email, 
                //     googleId:res.data.googleId })

            })
            .catch(err => console.log(err));
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