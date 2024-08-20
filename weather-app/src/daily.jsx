import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

let BASEURL = 'https://api.openweathermap.org/data/2.5/forecast';
let APIKEY = 'c4b99a3f43a298ed63bf5a36911ae32c'; // Replace with your own API key (or don't, I don't care)

function Daily() {

    let d = new Date(); 
    let hour = d.getHours();
    if(hour > 0)
        hour = Math.ceil(hour/3.0) * 3;
    else if( hour < 0)
        hour = Math.floor(hour/3.0) * 3;
    else
        hour = 3;

    if (hour > 21)
        hour = 0

    let index = (24 - hour)/3;
    console.log(hour);
    console.log(index);
    

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
            <h1>Daily Weather</h1>
            <div className="container">
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
            {weather.list && (
            <>
            <div id="weather">
            <p>Weather in <span id="city">{city}</span> for the next 5 days</p>
            <div id="daily-weather">
            <h2>Tomorrow</h2>
            <div className="day">
                <div className="3hr">
                    <h6>12am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                </div>
                <p style={{ display: 'none' }}>{index = index + 1}</p>
                <div className="3hr">
                    <h6>3am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index+1].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                </div>
                <p style= {{display: 'none'}}>{index = index +1}</p>
                <div className="3hr">
                    <h6>6am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index+1+1].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>9am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>12pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>3pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>6pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>9pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                </div>
            </div>
            <h2>In 2 Days</h2>
            <div className="day">
                <p style= {{display: 'none'}}>{index = index +1}</p>
                <div className="3hr">
                    <h6>12am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                </div>
                <p style= {{display: 'none'}}>{index = index +1}</p>
                <div className="3hr">
                    <h6>3am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>6am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>9am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>12pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>3pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>6pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>9pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                </div>
            </div><h2>In 3 Days</h2>
            <div className="day">
                <p style= {{display: 'none'}}>{index = index +1}</p>
                <div className="3hr">
                    <h6>12am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                </div>
                <p style= {{display: 'none'}}>{index = index +1}</p>
                <div className="3hr">
                    <h6>3am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>6am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>9am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>12pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>3pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>6pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>9pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                </div>
            </div><h2>In 4 Days</h2>
            <div className="day">
                <p style= {{display: 'none'}}>{index = index +1}</p>
                <div className="3hr">
                    <h6>12am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                </div>
                <p style= {{display: 'none'}}>{index = index +1}</p>
                <div className="3hr">
                    <h6>3am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>6am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>9am</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>12pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>3pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>6pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                <p style= {{display: 'none'}}>{index = index +1}</p></div>
                <div className="3hr">
                    <h6>9pm</h6>
                    <img src="../images/placeholder.png" alt=""></img>
                    <p><span id="Condition">{weather.list[index].weather[0].main}</span></p>
                    <p>Temperature: <span id="temperature"></span></p>
                    <p>Feels like: <span id="feels-like"></span></p>
                    <p>Wind Speed: <span id="wind-speed"></span></p>
                </div>
            </div>
            </div>
            </div>
            </>
                )}
            </form>
            </div>
            </>
    );  
}

ReactDOM.render(<Daily />, document.getElementById('app'));
