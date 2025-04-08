import { useState } from 'react'
import './App.css'
import Weather from './components/weather'
import SearchBar from './components/SearchBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar /> {/*Lock Search bar to top of screen*/}
      <Weather />
    </>
  )
}

export default App