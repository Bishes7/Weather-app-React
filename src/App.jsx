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
      });
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Sydney</p>
          </div>
          <div className="temp">
            <h1>19 deg Celcius</h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>19 deg Celcius</p>
          </div>
          <div className="humidity">
            <p>28%</p>
            <p> Humidity</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
            <p> Windspeed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
