import React, { useState, useEffect, useContext } from "react";
import Calendar from "../Calendar";
import Nav from "../Nav";
import Notes from "../Notes";
import ToDo from "../ToDo";
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
  font-family: ${(props) => props.theme.fontFamily};

  transition: all 0.5s ease;
`;

function Main(props, { action }) {


  // console.log(props);
  function changeTheme() {
    if (props.theme === "light") {
      props.test("dark");
    } else {
      props.test("light");
    }
  }

  // const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  // function Main(props) {
  const user = useContext(UserContext)
  console.log(user);
  return (
    <>
      <div class="grid-container fluid">
  
        <Page
          className="grid-x grid-margin-y"
          style={{
            // overflowY: "auto",
            // paddingTop: "20vh",
            paddingBottom: "auto",
            marginTop: "2%"
          }}
        > 

          <Container
            className="grid-margin-y"
            style={{
              // overflowY: "auto",
              // padding: "10vh 5vh 10vh 5vh",
              // paddingTop: "75vh",
            }}
          >
            <div className="grid-x grid-margin-y">
              <div className="cell radius">
                <Nav
                  theme={props.theme}
                  test={props.test}
                  fontTheme={props.fontTheme}
                  test1={props.test1}
                  colorThemeArray={props.colorThemeArray}
                  fontThemeArray={props.fontThemeArray}
                />
              </div>
            </div>
            <div className="grid-x grid-padding-x grid-margin-y">
              <div className="cell small-3">
                {/* <div className="grid-x radius"> */}
                <StyledToDo />
                {/* </div> */}
                {/* <div
                  className="grid-x radius "
                  style={{
                    justifyContent: "space-evenly",
                  }}
                >
                </div> */}
              </div>
              <div className="cell small-9">
                <StyledCalendar />
              </div>
            </div>
            <div className="grid-x grid-padding-x grid-margin-y radius"
            // style={{
            //   justifyContent: "space-evenly",
            //   padding: "4vh",
            //   border: "none",
            // }}
            >
              <div className="cell small-3">
                <StyledWeather />
              </div>
              <div className="cell small-9">
                <StyledNotes />

                {/* <div
                  className="grid-x radius"
                  style={{
                    justifyContent: "space-evenly",
                    padding: "4vh",
                    marginTop: "4vh",
                  }}
                > */}
                {/* </div> */}
              </div>
            </div>
            {/* </div> */}
          </Container>
        </Page>
      </div>
    </>
  );
}

export default Main;
