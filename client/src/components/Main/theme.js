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

const BlueTheme = {
  pageBackground: "#40e0d0 ",
  titleColor: "black",
  tagLineColor: "black",
}

const PinkTheme = {
  pageBackground: "pink",
  titleColor: "black",
  tagLineColor: "black",
}

const GreenTheme = {
  pageBackground: "#228B22",
  titleColor: "white",
  tagLineColor: "white",
}

const OrangeTheme = {
  pageBackground: "orange",
  titleColor: "black",
  tagLineColor: "black"
};

const MaroonTheme = {
  pageBackground: "#800000",
  titleColor: "white",
  tagLineColor: "gold"
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
  turqoise: BlueTheme,
  pink: PinkTheme,
  green: GreenTheme,
  orange: OrangeTheme,
  maroon: MaroonTheme
}

const colorThemeArray = [
  "turqoise",
  "pink",
  "green",
  "orange",
  "maroon"
]


function Theme() {
    const [theme, setTheme] = useState("dark")

function test(theme){
    console.log(theme);
    setTheme(theme)
}
      return (
        <ThemeProvider theme={themes[theme]}>
          <Main theme={theme} test={test} colorThemeArray={colorThemeArray} />
         </ThemeProvider>
      )
}

export default Theme;
