import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Eien} from './Napp';


class Game extends React.Component{
	
	render(){
		return(
			<div><Eien/></div>
		);
	}
}







// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
