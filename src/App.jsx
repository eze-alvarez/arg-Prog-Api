import { useState, useEffect } from 'react'
import './App.css'
import Clima from './components/Clima'
// import info from './response.json'

const URL = 'https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m&hourly=temperature_2m,precipitation_probability,visibility,uv_index&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FCordoba&forecast_days=1'
function App () {
  const [isLoading, setIsLoading] = useState(true)
  const [dataClima, setDataClima] = useState()

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setDataClima(data)
        setIsLoading(false)
      })
  }, [])
  return (
    <>
      {isLoading && <h1>cargando ..</h1>}
      {!isLoading && <Clima data={dataClima} />}
    </>
  )
}

export default App
