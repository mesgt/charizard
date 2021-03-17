import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { set } from "mongoose";
import "./calendar.css";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const localizer = momentLocalizer(moment);
// const MyEventsList = [
//   {
//     title: "Gwennie's birthday party",
//     start: "date",
//     end: "date",
//     allDay?: false,
//   }
// ]

const MyCalendar = (props) => {
  {
    /* MODAL STYLES */
  }
  const customStyles = {
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
      background: "#fff",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgb(72,72,72,.95)",
    },
  };
  // STATE FOR ADD MODAL OPEN/CLOSE \\
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // STATE FOR ARRAY OF ALL EVENTS \\
  const [events, setEvents] = useState([]);

  // STATE FOR NEW EVENT \\
  const [event, setEvent] = useState({});

  // DELETE AN EVENT \\
  const onSelectEvent = (pEvent) => {
    const confirm = window.confirm(
      "Are You Sure You Would Like To Remove Event?"
    );
    if (confirm) {
      console.log(pEvent);
      const allEvents = [...events];
      console.log(allEvents);
      const newEvents = allEvents.filter(({ title }) => title != pEvent.title);
      console.log(newEvents);
      setEvents(newEvents);
    }
  };

  // START ADD/DISPLAY NEW CALENDAR EVENT \\
  const handleSelect = ({ start, end }) => {
    setEvent({ ...event, start, end });
    setModalIsOpen(true);
  };

  // ADD VALUE INPUT FROM FORM AND ADD NEW EVENT TO EVENTS \\
  const saveEvent = () => {
    if (event.title) setEvents([...events, event]);
    setEvent({});
    setModalIsOpen(false);
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
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
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
                style={{ minHeight: "200px", width: "100%" }}
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
    </>
  );
};

export default MyCalendar;
