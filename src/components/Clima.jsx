import React from 'react'
import Principal from './Principal'
import IntervaloHoras from './IntervaloHoras'
import Higlights from './Highlights'
import styles from './Clima.module.css'
import { diaActual, hora, minuto } from '../utils/diaHora.js'

export default function Clima ({ data }) {
  const tempActual = data.current.temperature_2m
  const weathercode = data.current.weathercode
  const tMax = data.daily.temperature_2m_max
  const tMin = data.daily.temperature_2m_min
  const temperaturas = data.hourly.temperature_2m
  return (
    <div className={styles.areaClima}>
      <header>
        <Principal
          weathercode={weathercode}
          dia={diaActual}
          hora={hora}
          minuto={minuto}
          temp={tempActual}
          max={tMax}
          min={tMin}
        />
      </header>
      <main>
        <Higlights data={data} />
      </main>
      <footer>
        <IntervaloHoras temperaturas={temperaturas} />
      </footer>
    </div>
  )
}
