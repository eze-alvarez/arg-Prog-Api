import { useState, useEffect } from 'react'

export default function useClimaInfo () {
  const [isLoading, setIsLoading] = useState(true)
  const [dataClima, setDataClima] = useState()
  const URL = 'https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m&hourly=temperature_2m,precipitation_probability,visibility,uv_index&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FCordoba&forecast_days=1'

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setDataClima(data)
        setIsLoading(false)
      })
  }, [])
  return { isLoading, dataClima }
}
