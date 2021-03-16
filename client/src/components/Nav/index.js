import React from "react";
import "./nav.css";
import { GoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMailOpen, HiMoon } from "react-icons/hi";

const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const ColorToggle = styled.button`
    cursor: pointer;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const FontToggle = styled.button`
    cursor: pointer;
    height: 50px;
    border-radius: 50%;
    border: none;
    font: ${props => props.theme.fontStayle};
    transition: all .5s ease;
`;

function Nav(props) {

  const failedLogout = () => {
    alert("Something went wrong, try again.")
  }

  const history = useHistory();
  const redirect = () => {
    history.push("/")
  }

  function changeTheme() {
    if (props.theme === "light") {
      props.test("dark");
    } else {
      props.test("light");
    }
  }

  function changeColorTheme() {
    let currentIndex = 0;

    props.colorThemeArray.forEach((color, index) => {
      if(color === props.theme) {
        currentIndex = index;
      }
    })

    if(currentIndex+1 < props.colorThemeArray.length) {
      props.test(props.colorThemeArray[currentIndex+1])
    } else {
      props.test(props.colorThemeArray[0])
    }

  }

  function changeFontTheme() {
    let currentIndex = 0;

    props.fontThemeArray.forEach((font, index) => {
      if(font === props.theme) {
        currentIndex = index;
      }
    })

    if(currentIndex+1 < props.fontThemeArray.length) {
      props.test(props.fontThemeArray[currentIndex+1])
    } else {
      props.test(props.fontThemeArray[0])
    }

  }

  const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  //const Blueicon = props.theme === "blue" ? <HiMoon size={40} /> : <CgSun size={40} />;


  return (
    <div class="grid-x">
      <div class="header cell radius">
        <h3 class="Username">Welcome, User!</h3>
        <GoogleLogout
          clientId="49214406530-t4ofc8gge6vgfdchf8k6v3e28b883er9.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={redirect}
          onFailure={failedLogout}
          class = "LogoutBTN"
        ></GoogleLogout>
        <div class= "DarkBTN">
        <Toggle onClick={changeTheme}>
                {icon}
              </Toggle>
        <ColorToggle  onClick={changeColorTheme}>
                Color
            </ColorToggle>   
       <FontToggle  onClick={changeFontTheme}>
                Font
            </FontToggle>   
        </div>
      
        </div>
    </div>
  )
}

export default Nav;