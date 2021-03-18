import Login from "./pages/Login";
import Theme from './components/Main/theme'
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
import UserContext from "./utils/UserContext"


function App() {
  const [userState, setUserState] = useState({
    firstName: "",
    email: "",
    googleId: "",
    loggedin: false
  })

  const userInfo = (user) => {
    console.log(user)
    setUserState({ ...userState, firstName: user.givenName, email: user.email, googleId: user.googleId, loggedin: true })
  }

  // localStorage.setItem("user", JSON.stringify(user))

   // useEffect(()=> {
    //     const data = localStorage.getItem("user");
    //     if (data) {
    //       setUserState(JSON.parse(data))
    //     }
    //   },[])

  

  //create a private route where user has to be logged in to access
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) =>
    (userState.loggedin === true
      ? <Component {...props} />
      : <Redirect to="/" />)} />
  )

  return (
    <Router>
      <div>
        <UserContext.Provider value={userState}>
          <Route exact path="/"
            render={() => <Login userInfo={userInfo} />}
          />
          <Route exact path="/dash"component={Theme}/>
          {/* {DO NOT DELETE} */}
          {/* <PrivateRoute path="/dash" component={Theme} /> */}
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
