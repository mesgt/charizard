import Login from "./pages/Login";
import Theme from './components/Main/theme'
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserContext from "./utils/UserContext"

function App() {
  const [userState, setUserState] = useState({
    firstName: "",
    email: "",
    googleId: ""
  })

  const userInfo = (user) => {
    console.log(user)
    setUserState({...userState, firstName:user.givenName, email: user.email, googleId: user.googleId})
  }


  return (
    <Router>
      <div>
        <UserContext.Provider value={userState}>
          <Route exact path="/"
          render={() => <Login userInfo={userInfo} />}
           />
          <Route exact path="/dash" component={Theme} />
          </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
