import Main from "./index";
import React from "react";
import {useState} from "react";
import {ThemeProvider} from "styled-components";

const LightTheme = {
  name: "light",
  pageBackground: "white",
  titleColor: "black",
  tagLineColor: "black"
};

const DarkTheme = {
  name: "dark",
  pageBackground: "#282c36",
  titleColor: "white",
  tagLineColor: "white",
}

const BlueTheme = {
  name: "turqoise",
  pageBackground: "#40e0d0 ",
  titleColor: "black",
  tagLineColor: "black",
}

const PinkTheme = {
  name: "pink",
  pageBackground: "pink",
  titleColor: "black",
  tagLineColor: "black",
}

const GreenTheme = {
  name: "green",
  pageBackground: "#228B22",
  titleColor: "white",
  tagLineColor: "white",
}

const OrangeTheme = {
  name: "orange",
  pageBackground: "orange",
  titleColor: "black",
  tagLineColor: "black"
};

const MaroonTheme = {
  name: "maroon",
  pageBackground: "#800000",
  titleColor: "white",
  tagLineColor: "gold"
};

const CursiveTheme = {
  name: "cursive",
  fontFamily: "Bradley Hand, cursive",
};

const BoldTheme = {
  name: "bold",
  fontFamily: "Marker Felt, fantasy"
};


const themes = {
  light: LightTheme,
  dark: DarkTheme,
  turqoise: BlueTheme,
  pink: PinkTheme,
  green: GreenTheme,
  orange: OrangeTheme,
  maroon: MaroonTheme,
}

const fontThemes = {
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
    const [theme, setTheme] = useState(themes["light"])
    const [fontTheme, setFontTheme] = useState(fontThemes["cursive"]);
    const [overallTheme, setOverallTheme] = useState({...theme, ...fontTheme});

function test(newTheme){
    console.log(theme);
    setTheme(themes[newTheme])
    setOverallTheme({...themes[newTheme], ...fontTheme});
}
function test1(newFontTheme){
  console.log(theme);
  setFontTheme(fontThemes[newFontTheme])
  setOverallTheme({...theme, ...fontThemes[newFontTheme]});
}

      return (
        <ThemeProvider theme={overallTheme}>
          <Main 
          theme={theme.name} 
          fontTheme={fontTheme.name}
          test={test} 
          test1={test1}
          colorThemeArray={colorThemeArray} 
          fontThemeArray={fontThemeArray}/>
         </ThemeProvider>
      )
}

export default Theme;
