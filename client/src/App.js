import Main from './components/Main';
import Login from './pages/Login';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/dash" component={Main} />
      <Route exact path ="/logout" component={Login} />
      </div>
      
      {/* <Main />
      <Login /> */}
    
    </Router>
  );
}

export default App;
