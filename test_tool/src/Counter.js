import React from 'react';
import './index.css';
import { useState, useEffect} from 'react';

const Counter = (props) => {
	const [changeTime, setChangetime] = useState(0);

	useEffect(() => {
		props.setCount(100);
		console.log("test1")
	},[])
	
	useEffect(() => {
		setChangetime(changeTime + 1);
		console.log("test2")
	},[props.count])

	return(
		<div>
			<p>count:{props.count}</p>
			<button onClick={() =>props.setCount(props.count + 1)}>+</button>
			<p>count 的 prop被更改了 {changeTime} 次! </p>
		</div>	
	);
}
module.exports = Counter;
export default Counter;
