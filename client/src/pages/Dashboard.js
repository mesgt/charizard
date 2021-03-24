import React, { useContext } from "react";
import Calendar from "../components/Calendar";
import Nav from "../components/Nav";
import Notes from "../components/Notes";
import ToDo from "../components/ToDo";
import Weather from "../components/Weather/index";
import Footer from "../components/Footer";
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMailOpen, HiMoon } from "react-icons/hi";
import UserContext from "../utils/UserContext";
import "./Dashboard.css";


const StyledCalendar = styled(Calendar)``;
const StyledNotes = styled(Notes)`
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
`;
const StyledToDo = styled(ToDo)``;
const StyledWeather = styled(Weather)``;
const StyledNav = styled(Nav)``;

const Toggle = styled.button`
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const Page = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.titleColor};
  border: ${(props) => props.theme.titleColor};
  font-family: ${(props) => props.theme.fontFamily};

  transition: all 0.5s ease;
`;

function Dashboard(props, { action })  {

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
    const user = useContext(UserContext);
    console.log(user);
    return (
        <>
            {/* <div class="grid-container fluid"> */}
            <Page
          className="grid-x"
          style={{
            // overflowY: "auto",
            // paddingTop: "20vh",
            // paddingBottom: "auto",
            // margin: 0,
            // marginTop: "3%"
          }}
        >
          <Container className="grid-margin-y">
            <div className="callout large primary">
                <div className="row column text-center small-12">
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
            <div className="row column text-center">
                <div className="cell small-12 medium-4 large-4">
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
                <div className="cell small-12 medium-8 large-8">
                    <StyledCalendar userInfo={props.userInfo} />
                </div>
            </div>
            <div
                className="grid-x grid-padding-x grid-margin-y radius"
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
            <div className="footer">
              <Footer />
            </div>
            {/* </div> */}
            </Container>
            </Page>
            {/* </div> */}
        </>
    );
}


export default Dashboard;