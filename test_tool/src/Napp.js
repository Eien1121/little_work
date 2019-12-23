import React from 'react';
import './index.css';
import { useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Eien = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"  
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};
export  {Eien};