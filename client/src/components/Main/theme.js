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

const CursiveTheme = {
  fontStyle: "Bradley Hand, cursive",
};

const BoldTheme = {
  fontStyle: "Marker Felt, fantasy"
};


const themes = {
  light: LightTheme,
  dark: DarkTheme,
  turqoise: BlueTheme,
  pink: PinkTheme,
  green: GreenTheme,
  orange: OrangeTheme,
  maroon: MaroonTheme,
  cursive: CursiveTheme,
  bold: BoldTheme
}

const colorThemeArray = [
  "turqoise",
  "pink",
  "green",
  "orange",
  "maroon"
]

const fontThemeArray = [
  "cursive",
  "bold"

]


function Theme() {
    const [theme, setTheme] = useState("light")

function test(theme){
    console.log(theme);
    setTheme(theme)
}
      return (
        <ThemeProvider theme={themes[theme]}>
          <Main theme={theme} test={test} colorThemeArray={colorThemeArray} fontThemeArray={fontThemeArray}/>
         </ThemeProvider>
      )
}

export default Theme;
