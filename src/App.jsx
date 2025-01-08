import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ccff9ef615864a3e139be5a33a646133`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(data);
      });
      setLocation("");
    }
  };

  // Convert Kelvin to Celsius
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2); // Convert to Celsius and limit to 2 decimal places
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location} // added back the value to make the input controlled
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
          onKeyDown={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{kelvinToCelsius(data.main.temp)}°C</h1> : null}
          </div>
          <div className="description">
            <p>{data.weather ? data.weather[0].description : "Cloudy"}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>
              {data.main ? (
                <h3>{kelvinToCelsius(data.main.feels_like)}°C</h3>
              ) : null}
            </p>
          </div>
          <div className="humidity">
            <p>{data.main ? <h1>{data.main.humidity} %</h1> : null}</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>{data.wind ? <h1>{data.wind.speed} MPH</h1> : null}</p>
            <p>Windspeed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
