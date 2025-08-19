import WeatherCard from "./components/weathercard.jsx"
import SearchComponent from "./components/search.jsx"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [city, setCity] = useState("Minsk")
  const [weatherData, setWeatherData] = useState(null)
  const fetchWeather = (city_req) => {
    axios.get(`http://127.0.0.1:8000/weather/${city_req}`).then(resp => {
      console.log(`Город: ${city}`)
      setWeatherData(resp.data)
      console.log(weatherData)
    })
  }

  useEffect(() => {
    setWeatherData(null)
    fetchWeather(city)
  }, [city]);

  const onClick = (e) => {
    setCity(e)
  }
  
  return (
    <div className="mt-10">
      <SearchComponent onSearch={onClick}/>
      <WeatherCard weather={weatherData}/>
    </div>
  )
}

export default App
