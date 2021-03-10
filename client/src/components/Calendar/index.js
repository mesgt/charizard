// import "./calendar.css";
// import 'react-calendar/dist/Calendar.css';

// import React, { useState } from 'react';
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
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const MyCalendar = props => (
  <div class="padding-3">
    <Calendar
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"

      style={{ height: 400}}
    />
  </div>
)

export default MyCalendar;