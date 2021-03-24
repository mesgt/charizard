import { GoogleLogin } from "react-google-login";
import "./login.css";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import React, { useState, useEffect } from "react";
import UserContext from "../../utils/UserContext";

function CreateAccount(props) {
  const history = useHistory();

  const redirect = (response) => {
    console.log("response", response);
    console.log(response.profileObj);

    createUser(response).then((user) => {
      console.log(user);
      history.push("/");
      // props.userInfo(user)
    });
  };

  const createUser = async (response) => {
    let email = response.profileObj.email;
    console.log(response);
    API.findByEmail(email)
      .then((res) => {
        if (res.data !== null) {
          // history.push("/dash");
          console.log("User exists!");
          console.log(res);
          alert("You already created an account; please login.")
          return res.data;
        } else {
          API.createUser({
            email: response.profileObj.email,
            givenName: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            googleId: response.profileObj.googleId,
            events: [],
            todos: [],
          })
            .then(() => {
              history.push("/");
              alert("Thanks for creating an account! You can login now.")
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
    return response.profileObj;
  };

  const failedLogin = () => {
    alert("Something went wrong, try again.");
  };
  return (
    <>
      {/* <div className="grid-x">
        <div className="logincontainer"> */}
          <div id="signupHere" className="log-in-form radius bordered shadow">
            <div className="log-in-text">
              <span className="text-center loginHeading">Welcome to your</span>
              <br></br>
              <span className="text-center loginHeadingName">Everything</span>
              <div className="googleBtn">
                <GoogleLogin
                  clientId="277440639024-khmlcdp27npa3bdmj3fmd2i6r1ptq54v.apps.googleusercontent.com"
                  buttonText="create account"
                  onSuccess={redirect}
                  isSignedIn={false}
                  onFailure={failedLogin}
                  cookiePolicy={"single_host_origin"}
                  scope="https://www.googleapis.com/auth/calendar.events"
                />
              </div>
            </div>
          {/* </div>
        </div> */}
      </div>
    </>
  );
}

export default CreateAccount;
