import Login from "./pages/Login";
import Theme from "./components/Main/theme";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
} from "react-router-dom";
import UserContext from "./utils/UserContext";

function App() {
  const [userState, setUserState] = useState({
    givenName: "",
    email: "",
    googleId: "",
    loggedin: false,
    events: [],
    todos: [],
  });

  const userInfo = (user) => {
    console.log(user);
    setUserState({
      givenName: user.givenName,
      email: user.email,
      googleId: user.googleId,
      loggedin: true,
      events: user.events,
      todos: user.todos,
    });
  };

  useEffect(() => {
    const data = localStorage.getItem("currentUser");
    if (data) {
      setUserState(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(userState));
  });

  //create a private route where user has to be logged in to access
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        userState.loggedin === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );

  return (
    <Router>
      <div>
        <UserContext.Provider value={userState}>
          <Route exact path="/" render={() => <Login userInfo={userInfo} />} />
          
          <Route
            exact path="/dash"
            render={() => <Theme userInfo={userInfo} />}
          />
          {/* {DO NOT DELETE} */}
          {/* <PrivateRoute path="/dash" component={Theme} /> */}
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
