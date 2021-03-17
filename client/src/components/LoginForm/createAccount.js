import { GoogleLogin } from 'react-google-login';
import "./login.css";
import { useHistory } from "react-router-dom"
import API from "../../utils/API"
import React, { useState, useEffect } from "react";
// import UserContext from "../../utils/UserContext"

function CreateAccount(props) {
    const history = useHistory();

    const redirect = (response) => {
        console.log(response.profileObj);
       
        createUser(response)
        .then(user => {
            console.log(user);
            props.userInfo(user)
        })
    }

    const createUser = async (response) => {
        let email = response.profileObj.email
        console.log(response);
        API.findByEmail(email)
            .then((res) => {
                if (res.data !== null) {
                    history.push("/dash");
                    console.log("User exists!");
                    return response.profileObj
                } else {
                    API.createUser({
                        email: response.profileObj.email,
                        firstName: response.profileObj.givenName,
                        lastName: response.profileObj.familyName,
                        googleId: response.profileObj.googleId
                    })
                        .then(() => {
                            history.push("/dash")
                        })
                        .catch(err => console.log(err));
                    };
                })
                .catch(err => console.log(err));
                return response.profileObj
    }

    const failedLogin = () => {
        alert("Something went wrong, try again.")
    }

    return (
        <>
            <div class="grid-x">
                <div class="logincontainer">
                    <div class="log-in-form radius bordered shadow">
                        <div class="log-in-text">
                        <span class="text-center loginHeading">Login to</span><br></br><span class="text-center loginHeadingName">Everything</span>
                        <div class="googleBtn">
                            <GoogleLogin
                                clientId="49214406530-t4ofc8gge6vgfdchf8k6v3e28b883er9.apps.googleusercontent.com"
                                buttonText="Login"
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
            </div>
        </>

    )
}

export default CreateAccount;