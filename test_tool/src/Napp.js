import React from 'react';
import './index.css';
import { useState} from 'react';
import Counter from './Counter';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Napp = () =>{
	const [ count, setCount] = useState(0);
	return(
		<div className="App">
			<Counter count={count} setCount={setCount}/>
		</div>	
	);
}

// const Eien = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={date => setStartDate(date)}
//       showTimeSelect
//       timeFormat="HH:mm"
//       timeIntervals={15}
//       timeCaption="time"
//       dateFormat="MMMM d, yyyy h:mm aa"
//     />
//   );
// };

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
export  {Napp,Eien};