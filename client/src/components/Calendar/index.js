import "./calendar.css";
// import 'react-calendar/dist/Calendar.css';

import React from "react";
// import ReactCalendar from 'react-calendar';

// function Calendar () {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       <ReactCalendar
//         onChange={onChange}
//         value={value}
//       />
//     </div>
//   );
// }
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { set } from "mongoose";

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
  const [events, setEvents] = React.useState([]);
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
  const handleSelect = ({ start, end }) => {
    // console.log(start, end);
    const title = window.prompt("New Event name");
    if (title)
      setEvents([
        ...events,
        {
          start,
          end,
          title,
        },
      ]);
  };
  return (
    <div className="padding-3">
      <Calendar
        popup
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 550, width: 800 }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectEvent={(event) => onSelectEvent(event)}
        onSelectSlot={handleSelect}
      />
    </div>
  );
};

export default MyCalendar;
