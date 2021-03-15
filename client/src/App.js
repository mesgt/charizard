import Login from "./pages/Login";
import Theme from './components/Main/theme'
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
 

  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/dash" component={Theme}  />
      </div>
    </Router>
  );
}

export default App;
