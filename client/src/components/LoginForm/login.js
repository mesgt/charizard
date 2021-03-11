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
        <div class="log-in-form">
            <div class="text-center">
                <h4>Log in to Everything</h4>
                <input type="input" name="firstName" placeholder="First Name" />
                <input type="input" name="lastName" placeholder="Last Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <p><input type="submit" class="button expanded" value="Log in"></input></p>
            </div>
        </div>
        <GoogleLogin
        clientId="49214406530-t4ofc8gge6vgfdchf8k6v3e28b883er9.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        isSignedIn={false}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        scope="https://www.googleapis.com/auth/calendar.events"
      />
      </>
    )
}

export default LoginForm;