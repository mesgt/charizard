import Main from "./index";
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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

// function App() {
//   const [theme, setTheme] = useState("dark")
//   return (
//     <ThemeProvider theme={themes[theme]}>
//       <Main theme={theme} setTheme={setTheme} />
//     </ThemeProvider>
//   )
// }
function Theme() {
    const [theme, setTheme] = useState("dark")

//     const test = (theme) => {
// console.log(theme);
//     }

function test(theme){
    console.log(theme);
    setTheme(theme)
}
      return (
        <ThemeProvider theme={themes[theme]}>
          <Main theme={theme} test={test} />
         </ThemeProvider>
      )
}

export default Theme;
