import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import API from '../../config/index.js';
import css from './style.scss';

class App extends React.Component {
	constructor(props) {
		super(props)
  }

	render() {
		return (
      <div>
      	<h1>What's the Weather in Your City?</h1>
      </div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));