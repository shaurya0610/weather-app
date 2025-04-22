import { useState } from 'react'
import './App.css'
import Weather from './components/Weather/Weather'
import SearchBar from './components/SearchBar'

function App() {
  const [weather, setWeather] = useState();
  const [aqi, setAqi] = useState();

  return (
    <>
      <SearchBar
        setWeather={setWeather}
        setAqi={setAqi}
      />
      <Weather
        weather={weather}
        aqi={aqi}
      />
    </>
  )
}

export default App