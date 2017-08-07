import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import API from '../../config/index.js';
import css from './style.scss';
import Header from './components/input.jsx';

class App extends React.Component {
	constructor(props) {
		super(props)
  let sampleData = {city: {name: 'Your City'}, weather:[{description: 'Clear Sky', icon: '01n', main: 'Clear'}], main: {temp: 255.39, humidity:0, pressure:0}, wind: {speed: 0}}
		this.state = {
    	weatherData: sampleData,
    	city: '',
    	image: 'http://openweathermap.org/img/w/10d.png',
    	isCity: false,
    	class: 'animate-image'
    }
		this.getWeatherData = this.getWeatherData.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
  }

  getWeatherData(city) {
		$.ajax({
			url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API.weatherunderground}`,
			type: 'GET',
      data: 'application/json',
			success: function(data) {
				this.setState({
        	weatherData: data,
	        image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
	        isCity: false,
	        class: this.state.class === 'animate-image' ? 'animate-image-two' : 'animate-image'
        })
        console.log(data)
			}.bind(this),
			error: function(err) {
				if(err) {
					this.setState({
						isCity: true
					})
					console.log('not found');
				}
			}.bind(this)
		})
	}

	handleSubmit(e) {
    e.preventDefault()
    this.getWeatherData(this.state.city)
    this.setState({
    	city: ''
    })
	}

	handleChange(e) {
    this.setState({
      city: e.target.value.toLowerCase()
    })
	}
	render() {
    return (
      <div className='container'>
      	<h1>What's the Weather in Your City?</h1>
        <Header handleSubmit={this.handleSubmit} handleChange={this.handleChange} city={this.state.city}/>
        <div className='weather-box'>
          <h2>{this.state.weatherData.name}</h2>
	      	<p>{this.state.weatherData.weather[0].description}</p>
	      	<img className={this.state.class} width='100' src={this.state.image}/>
	      	<p>Current Temp: {((this.state.weatherData.main.temp) * (9 / 5) - 459.67).toFixed(1)}&deg;</p>
	      	<p>Humidity: {this.state.weatherData.main.humidity}</p>
	      	<p>Wind Speed: {this.state.weatherData.wind.speed} mph</p>
	      	<p>Pressure: {this.state.weatherData.main.pressure}</p>
	      </div>
      </div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));