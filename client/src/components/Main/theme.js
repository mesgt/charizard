import Main from "./index";
import React from "react";
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


function Theme() {
    const [theme, setTheme] = useState("dark")

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
