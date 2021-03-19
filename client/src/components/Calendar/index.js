import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";
import React, { useState, useContext, useEffect } from "react";
import Modal from "react-modal";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API";
Modal.setAppElement("#root");

const localizer = momentLocalizer(moment);

const customStyles1 = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    zIndex: 1001,
    transform: "translate(-50%, -50%)",
    maxHeight: "100vh",
    overflowY: "auto",
    // background: "#fff",
    backgroundImage: `url("https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`,
    backgroundSize: "cover",
    border: "solid black 1px",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgb(72,72,72,.95)",
  },
};

const customStyles2 = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    zIndex: 1001,
    transform: "translate(-50%, -50%)",
    maxHeight: "100vh",
    overflowY: "auto",
    // background: "rgba(243, 32, 19,.8)",
    backgroundImage: `url("https://images.pexels.com/photos/1128843/pexels-photo-1128843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`,
    backgroundSize: "cover",
    border: "solid black 1px",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgb(72,72,72,.95)",
  },
};

function MyCalendar(props) {
  const user = useContext(UserContext);
  console.log(user);

  // STATE FOR ADD EVENT MODAL OPEN/CLOSE \\
  const [modalIsOpen1, setModalIsOpen1] = useState(false);

  // STATE FOR DELETE EVENT MODAL OPEN/CLOSE \\
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  // STATE FOR ARRAY OF ALL EVENTS \\
  const [events, setEvents] = useState([]);

  // STATE FOR NEW EVENT \\
  const [event, setEvent] = useState({});

  // STATE FOR DELETE EVENT \\
  const [eventDelete, setEventDelete] = useState([]);
  console.log(user.events);
  // POPULATES CALENDAR WHEN USER LOGS IN \\
  useEffect(() => {
    setEvents(user.events);
  }, [user.events]);

  // DELETE EVENT FROM EVENTDELETE STATE \\
  const deleteEvent = () => {
    const allEvents = [...events];
    const newEvents = allEvents.filter(
      ({ title }) => title != eventDelete.title
    );
    setEvents(newEvents);
    setModalIsOpen2(false);
  };

  // ADD SELECTED EVENT TO BE DELETED TO EVENTDELETE STATE \\
  const onSelectEvent = (pEvent) => {
    setEventDelete(pEvent);
    setModalIsOpen2(true);
  };

  // START ADD/DISPLAY NEW CALENDAR EVENT \\
  const handleSelect = ({ start, end }) => {
    setEvent({ ...event, start, end });
    setModalIsOpen1(true);
  };

  // ADD VALUE INPUT FROM FORM AND ADD NEW EVENT TO EVENTS \\
  const saveEvent = () => {
    if (event.title) {
      API.addEvent({ ...event, googleId: user.googleId });
      setEvents([...events, event]);
    }

    setEvent({});
    setModalIsOpen1(false);
  };
  return (
    <>
      <div className="padding-3">
        <Calendar
          popup
          selectable
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 550 }}
          onSelectEvent={(event) => alert(event.title)}
          onSelectEvent={(event) => onSelectEvent(event)}
          onSelectSlot={handleSelect}
        />
      </div>
      <Modal
        isOpen={modalIsOpen1}
        style={customStyles1}
        onRequestClose={() => setModalIsOpen1(false)}
        closeTimeoutMS={500}
      >
        <div className="flex-container">
          <div class="grid-x grid-margin-x small-up-5 ">
            <div
              className="cell"
              style={{
                width: "100%",
                padding: "10vh",
                margin: "auto",
              }}
            >
              <div
                className="card"
                style={{
                  minHeight: "200px",
                  width: "100%",
                  border: "solid black 1px",
                }}
              >
                <div className="card-section medium-8 cell">
                  <h4>Title Of Appointment</h4>

                  <input
                    onChange={(e) =>
                      setEvent({ ...event, title: e.target.value })
                    }
                    type="text"
                    placeholder=""
                    value={event.title}
                  ></input>

                  <a
                    style={{ border: "1px solid white", fontWeight: "bold" }}
                    onClick={() => saveEvent()}
                    class="button primary"
                    href="#/"
                  >
                    Submit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen2}
        style={customStyles2}
        onRequestClose={() => setModalIsOpen2(false)}
        closeTimeoutMS={500}
      >
        <div className="flex-container">
          <div class="grid-x grid-margin-x small-up-5 ">
            <div
              className="cell"
              style={{
                width: "100%",
                padding: "10vh",
                margin: "auto",
              }}
            >
              <div
                className="card"
                style={{
                  minHeight: "auto",
                  width: "100%",
                  border: "solid black 1px",
                }}
              >
                <div className="card-section medium-8 cell">
                  <h4 style={{ fontWeight: "bold" }}>CONFIRM DELETE!</h4>
                  <span style={{ justifyContent: "space-between" }}>
                    <i
                      onClick={() => deleteEvent()}
                      className="fa fa-check-square"
                      style={{
                        fontSize: "5vh",
                        color: "green",
                        marginLeft: "2rem",
                        position: "relative",
                      }}
                    ></i>
                    <i
                      onClick={() => setModalIsOpen2(false)}
                      className="fa fa-window-close "
                      style={{
                        fontSize: "5vh",
                        color: "red",
                        marginLeft: "4rem",
                        position: "relative",
                      }}
                    ></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default MyCalendar;
