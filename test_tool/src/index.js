import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Eien,Napp} from './Napp';


class Game extends React.Component{
	
	render(){
		return(
			<div><Napp/></div>
		);
	}
}







// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
