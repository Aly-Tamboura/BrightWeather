import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import API from '../../config/index.js';
import css from './style.scss';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.getWeatherData = this.getWeatherData.bind(this);
  }
  componentDidMount() {
		this.getWeatherData('san jose')
  }

  getWeatherData(city) {
		$.ajax({
			url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API.weatherunderground}`,
			type: 'GET',
      data: 'application/json',
			success: function(data) {
        console.log(data)
			}.bind(this),
			error: function(err) {
				if(err) {
					console.log('not found');
				}
			}.bind(this)
		})
	}

	render() {
		return (
      <div className='container'>
      	<h1>What's the Weather in Your City?</h1>
      </div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));