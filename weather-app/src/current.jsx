import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

let BASEURL = 'https://api.openweathermap.org/data/2.5/weather';
let APIKEY = 'c4b99a3f43a298ed63bf5a36911ae32c'; // Replace with your own API key (or don't, I don't care)

function Current() {
    
    const [weather, setWeather] = useState([]);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const [tempUnits, setTempUnits] = useState('metric');
    const [countryCode, setCountryCode] = useState('');

    useEffect(() => {
        if (city !== '' && postcode === '') {
            fetch(`${BASEURL}?q=${city},${countryCode}&appid=${APIKEY}&units=${tempUnits}`)
                .then((response) => response.json())
                .then((data) => setWeather(data))
                .catch((error) => {
                    setError(error.message);
                });
            console.log('city:', city);
        } else if (city === '' && postcode !== '') {
            fetch(`${BASEURL}?zip=${postcode},${countryCode}&appid=${APIKEY}&units=${tempUnits}`)
                .then((response) => response.json())
                .then((data) => setWeather(data))
                .catch((error) => {
                    setError(error.message);
                });
            console.log('postcode:', postcode);
        }
    }, [city, postcode, tempUnits]);



    return (
        <>
        <h1 className="title">Current Weather</h1>
        <form>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                className= "input"
            />
            <input
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="Enter postcode"
                className= "input"
            />
            <input 
                type = "text"
                value = {countryCode}
                onChange = {(e) => setCountryCode(e.target.value)}
                placeholder = "Enter country code"
                className = "input"
            />
            <select
                value={tempUnits}
                onChange={(e) => setTempUnits(e.target.value)}
                className= "input"
            >
                <option value="metric">Celsius</option>
                <option value="imperial">Fahrenheit</option>
            </select>
            
            {error && <p>{error}</p>}
            {weather.main && (
                <>
                <div class="container">
                    <div id="current-weather">
                        <p>Weather in <span id="city">{city}</span> right now</p>
                        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} />
                        <p><span id="condition">{weather.weather[0].description}</span></p>
                        <p>Temperature: <span id="temperature">{weather.main.temp}°C </span></p>
                        <p>Feels like: <span id="feels-like"></span>{weather.main.feels_like}°C </p>
                        <p>Wind Speed: <span id="wind-speed">{weather.wind.speed} m/s</span></p>
                    </div>
                </div>
                </>
            )}
        </form>
        </>
    );
}

ReactDOM.render(<Current />, document.getElementById('app'));