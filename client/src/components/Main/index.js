import React, { useState, useEffect, useContext } from "react";
import Calendar from "../Calendar";
import Nav from "../Nav";
import Notes from "../Notes";
import ToDo from "../ToDo"; //this is importing the index.js only.
import Weather from "../Weather/index";
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMailOpen, HiMoon } from "react-icons/hi";
import UserContext from "../../utils/UserContext"


const StyledCalendar = styled(Calendar)``;
const StyledNotes = styled(Notes)`
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
`;
const StyledToDo = styled(ToDo)``;
const StyledWeather = styled(Weather)``;
const StyledNav = styled(Nav)``;

// const Toggle = styled.button`
//     cursor: pointer;
//     height: 50px;
//     border-radius: 50%;
//     border: none;
//     background-color: ${props => props.theme.titleColor};
//     color: ${props => props.theme.pageBackground};
//     &:focus {
//         outline: none;
//     }
//     transition: all .5s ease;
// `;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

const Container = styled.div`
  // display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 600px;
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.titleColor};
  border: ${(props) => props.theme.titleColor};

  transition: all 0.5s ease;
`;

function Main(props) {
  const user = useContext(UserContext)
  console.log(user);
  return (
    <>

      <Page
        style={{
          overflowY: "auto",
          paddingBottom: "auto",
        }}
      >
        <Container
          style={{
            overflowY: "auto",
            padding: "10vh 5vh 10vh 5vh",
            paddingTop: "120vh",
          }}
        >
          <div className="grid-x">
            <div className="cell radius">
              <Nav
                theme={props.theme}
                test={props.test}
                colorThemeArray={props.colorThemeArray}
              />
              {/* <div className="cell radius"><Toggle onClick={changeTheme}>
                {icon}
              </Toggle></div> */}
            </div>
          </div>
          <div className="grid-x">
            <div className="cell small-3">
              <div className="grid-x radius">
                <StyledToDo />
              </div>
              <div
                className="grid-x radius "
                style={{
                  justifyContent: "space-evenly",
                }}
              >
                <StyledWeather />
              </div>
            </div>
            <div className="cell small-9">
              <div
                className="grid-x radius"
                style={{
                  justifyContent: "space-evenly",
                  padding: "4vh",
                  marginTop: "4vh",
                }}
              >
                <StyledCalendar />
              </div>
              <div
                className="grid-x radius"
                style={{
                  justifyContent: "space-evenly",
                  padding: "4vh",
                  border: "none",
                }}
              >
                <StyledNotes />
              </div>
            </div>
          </div>
        </Container>
      </Page>
    </>
  );
}

export default Main;
