import React, {useState} from "react";
import Calendar from "../Calendar";
import Nav from "../Nav";
import Notes from "../Notes";
import ToDo from "../ToDo"; //this is importing the index.js only.
import Weather from "../Weather/index";
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMailOpen, HiMoon } from "react-icons/hi";

const StyledCalendar = styled(Calendar)``;
const StyledNotes = styled(Notes)``;
const StyledToDo = styled(ToDo)``;
const StyledWeather = styled(Weather)``;
const StyledNav = styled(Nav)``

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

const Page = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background-color: ${props => props.theme.pageBackground};
transition: all .5s ease;
`;

const Container = styled.div`
    // display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 600px;
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.titleColor};
    border: ${props => props.theme.titleColor};


transition: all .5s ease;
`;

function Main(props) {
//To do states
  const [modalIsOpen, setModalIsOpen] = useState(false);

  console.log(props);
  function changeTheme() {
    if (props.theme === "light") {
      props.test("dark");
    } else {
      props.test("light");
    }
  }

  const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  return (
    <>
      <Page>
        <Container>
          <div class="grid-x">

            <div class="cell radius"><Nav />
            <div class="cell radius"><Toggle onClick={changeTheme}>
              {icon}
            </Toggle></div>
            </div>

          </div>
          <div class="grid-x">
            <div class="cell small-3">
              <div class="grid-x radius"><StyledToDo 
              editModalOpen={modalIsOpen}
              toggleModal={() => setModalIsOpen(!modalIsOpen)}
              /></div>
              <div class="grid-x radius"><StyledWeather /></div>
            </div>
            <div class="cell small-9">
              <div class="grid-x radius"><StyledCalendar /></div>
              <div class="grid-x radius"><StyledNotes /></div>
            </div>
          </div>
        </Container>
      </Page>

    </>
  );
};

export default Main;
