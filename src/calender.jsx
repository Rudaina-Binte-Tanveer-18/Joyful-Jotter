import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calender.css'

export default function MyApp() {
  const [value, setValue] = useState(new Date());

  return (
    <div id='calendar'>
      <Calendar onChange={setValue} value={value}/>
    </div>
  );
}
