Weather App
A simple weather application built with React that allows users to check the current weather of any location by searching for it. The app fetches data from the OpenWeatherMap API and displays the temperature in Celsius, humidity, wind speed, and weather description.

Features
Search for any location to get the current weather.
Displays the temperature in Celsius.
Shows additional details like humidity, windspeed, and weather description.
Built with React and Axios for API requests.
Technologies Used
React: JavaScript library for building user interfaces.
Axios: Promise-based HTTP client for making API requests.
OpenWeatherMap API: Provides weather data based on location.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Bishes7/Weather-app-React.git
Navigate to the project directory:

bash
Copy code
cd weather-app
Install dependencies:

bash
Copy code
npm install
Create an .env file in the root of the project and add your OpenWeatherMap API key like this:

bash
Copy code
REACT_APP_API_KEY=your-api-key
Start the development server:

bash
Copy code
npm start
The app will be available at http://localhost:3000.

Usage
Open the app in your browser.
Type a location (city name) in the input field.
Press Enter to fetch the weather data for that location.
The weather details, including temperature in Celsius, humidity, wind speed, and weather description, will be displayed.
Example
Location: "New York"
Temperature: 22.5°C
Humidity: 65%
Windspeed: 10 MPH
Description: "Clear sky"
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.
