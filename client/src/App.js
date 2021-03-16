import Login from "./pages/Login";
import Theme from './components/Main/theme'
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        {/* <UserContext.Provider value={userState}> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/dash" component={Theme} />
        {/* </UserContext.Provider> */}
      </div>
    </Router>
  );
}

export default App;
