
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Shedule.css'



const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2021, 6, 0),
      end: new Date(2021, 6, 0),
  },
  {
      title: "Vacation",
      start: new Date(2021, 6, 7),
      end: new Date(2021, 6, 10),
  },
  {
      title: "Conference",
      start: new Date(2021, 6, 20),
      end: new Date(2021, 6, 23),
  },
];

function App() {
  const [newEvent, setNewEvent] = useState({ title: "",  descipline: "",cabinet: "",group: "",time: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
      
      for (let i=0; i<allEvents.length; i++){

          const d1 = new Date (allEvents[i].start);
          const d2 = new Date(newEvent.start);
          const d3 = new Date(allEvents[i].end);
          const d4 = new Date(newEvent.end);
    /*
        console.log(d1 <= d2);
        console.log(d2 <= d3);
        console.log(d1 <= d4);
        console.log(d4 <= d3);
          */

           if (
            ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
              (d4 <= d3) )
            )
          {   
              alert("CLASH"); 
              break;
           }
  
      }
      
      
      setAllEvents([...allEvents, newEvent]);
  }

  return (
      <div className="App">
          <h1>Calendar</h1>
          <div>
              <input type="text" placeholder="Descipline" style={{ width: "20%", marginRight: "10px" }} value={newEvent.descipline} onChange={(e) => setNewEvent({ ...newEvent, descipline: e.target.value })} />
              <input type="text" placeholder="Cabinet" style={{ width: "20%", marginRight: "10px" }} value={newEvent.cabinet} onChange={(e) => setNewEvent({ ...newEvent, cabinet: e.target.value })} />
              <input type="text" placeholder="Group" style={{ width: "20%", marginRight: "10px" }} value={newEvent.group} onChange={(e) => setNewEvent({ ...newEvent, group: e.target.value })} />
              <input type="text" placeholder="Time" style={{ width: "20%", marginRight: "10px" }} value={newEvent.time} onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} />

              <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
              <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
              <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                  Add Event
              </button>
          </div>
          <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
      </div>
  );
}

export default App;