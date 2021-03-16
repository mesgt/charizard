import { GoogleLogin } from 'react-google-login';
import "./login.css";
import { useHistory } from "react-router-dom"
import API from "../../utils/API"
import React, { useState, useEffect } from "react";
import UserContext from "../../utils/UserContext"

function LoginForm() {

    const history = useHistory();

    const redirect = (response) => {
        console.log(response.profileObj);
        createUser(response);
        history.push("/dash")
    }

    const createUser = (response) => {
        API.createUser({
            email: response.profileObj.email,
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName
        })
            .then(() =>
                console.log("User created!"))
            .catch(err => console.log(err));
    }

    const failedLogin = () => {
        alert("Something went wrong, try again.")
    }

    const [userState, setUserState] = useState({
        id: "",
        firstName: "",
        email: ""
    })

    useEffect(() => {
        API.findByEmail
            .then((res) => {
                setUserState({id:res.data._id, firstName:res.data.firstName, email:res.data.email});
                console.log(userState);
            })
            .catch(err => console.log(err));
    });

      
     
    return (
        <>
        <UserContext.Provider value={userState}>
            <div class="grid-x">
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
            </UserContext.Provider>
        </>
    )
}

export default LoginForm;