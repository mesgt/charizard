import Main from "./index";
import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

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
  fontFamily: "Cedarville Cursive, cursive",
};

const BoldTheme = {
  name: "bold",
  fontFamily: "Caveat Brush, cursive",
};

const ChalkTheme = {
  name: "chalk",
  fontFamily: "Chalkduster, fantasy"
};

const JazzTheme = {
  name: "jazz",
  fontFamily: "Amatic SC, cursive"
};

const ImpactTheme = {
  name: "impact",
  fontFamily: "Impact, fantasy"
};

const LongFormTheme = {
  name: "long",
  fontFamily: "Nothing You Could Do, cursive"
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
  turqoise: BlueTheme,
  pink: PinkTheme,
  green: GreenTheme,
  orange: OrangeTheme,
  maroon: MaroonTheme,
  long: LongFormTheme
}

const fontThemes = {
  cursive: CursiveTheme,
  bold: BoldTheme,
  chalk: ChalkTheme,
  jazz: JazzTheme,
  impact: ImpactTheme,
  long: LongFormTheme
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
  "bold",
  "chalk",
  "jazz",
  "impact",
  "long"

]


function Theme(props) {
  const [theme, setTheme] = useState(themes["dark"])
  const [fontTheme, setFontTheme] = useState(fontThemes["long"]);
  const [overallTheme, setOverallTheme] = useState({ ...theme, ...fontTheme });

  function test(newTheme) {
    console.log(theme);
    setTheme(themes[newTheme])
    setOverallTheme({ ...themes[newTheme], ...fontTheme });
  }
  function test1(newFontTheme) {
    console.log(theme);
    setFontTheme(fontThemes[newFontTheme])
    setOverallTheme({ ...theme, ...fontThemes[newFontTheme] });
  }

  return (
    <ThemeProvider theme={overallTheme}>
      <Main
        theme={theme.name}
        fontTheme={fontTheme.name}
        test={test}
        test1={test1}
        colorThemeArray={colorThemeArray}
        fontThemeArray={fontThemeArray}
        userInfo={props.userInfo} />
    </ThemeProvider>
  )
}

export default Theme;
