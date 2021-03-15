import Main from "./components/Main";
import Login from "./pages/Login";
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { modelNames } from "mongoose";
import {useState} from "react";
import {ThemeProvider} from "styled-components";

const LightTheme = {
  pageBackground: "white",
  titleColor: "black",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "white",
  tagLineColor: "white",
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {
  const [theme, setTheme] = useState("dark")
  return (
    <ThemeProvider theme={themes[theme]}>
      <Main theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  )
}
// function App() {
//   return (
//     <Router>
//       <div>
//         <Route exact path="/" component={Login} />
//         {/* {loggedIn ? <Redirect to="/dash" /> : <Login />}
//         </Route> */}
//         <Route exact path="/dash" component={Main} />
//         {/* <Route exact path="/logout" component={Login} /> */}
//       </div>
//     </Router>
//   );
// }

export default App;
