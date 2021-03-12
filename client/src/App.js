import Main from './components/Main';
import Login from './pages/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
          {/* {loggedIn ? <Redirect to="/dash" /> : <Login />}
        </Route> */}
        <Route exact path="/dash" component={Main} />
        {/* <Route exact path="/logout" component={Login} /> */}
      </div>
    </Router>
  );
}

export default App;
