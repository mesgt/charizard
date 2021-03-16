import React from "react";
import "./nav.css";
import { GoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom"

function Nav() {

  const failedLogout = () => {
    alert("Something went wrong, try again.")
  }

  const history = useHistory();
  const redirect = () => {
    history.push("/")
  }

  return (
    <div className="holy-grail-grid">
      <div className="header">
        <h3>Welcome </h3>
        <GoogleLogout
          clientId="49214406530-t4ofc8gge6vgfdchf8k6v3e28b883er9.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={redirect}
          onFailure={failedLogout}
        ></GoogleLogout>
      </div>
    </div>
  )
}

export default Nav;