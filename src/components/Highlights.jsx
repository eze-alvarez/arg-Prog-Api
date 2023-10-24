import React from 'react'
import styles from './Highlights.module.css'
import Item from './Item'
import ItemSunriseSunset from './ItemSunriseSunset'
import ItemBarraCircular from './ItemBarraCircular'
import { hora } from '../utils/diaHora'
export default function Highlights ({ data }) {
  const indexUv = data.hourly.uv_index[hora]
  const wind = data.current.windspeed_10m
  const sunrise = data.daily.sunrise[0].slice(-5)
  const sunset = data.daily.sunset[0].slice(-5)
  const humidity = data.current.relativehumidity_2m
  const visibility = data.hourly.visibility[hora] / 1000
  const precipitation = data.hourly.precipitation_probability[hora]
  return (
    <section className={styles.areaHigh}>
      <ItemBarraCircular
        num={indexUv}
        max={11}
        title='UV INDEX'
      />

      <Item
        title='WIND STATUS'
        num={wind}
        unidad='Km/h'
        texto={`el viento es de ${wind} Km/h a 10 mts sobre el suelo`}
      />
      <ItemSunriseSunset
        sunrise={sunrise}
        sunset={sunset}
      />

      <Item
        title='HUMEDITY'
        num={humidity}
        unidad='%'
        conclusion={humidity > 50 ? 'Húmedo' : 'Normal'}
        barra
      />

      <Item
        title='VISIBILITY'
        num={visibility}
        unidad='Km'
        conclusion={visibility < 15 ? 'decreased visibility' : 'Average'}
      />

      <Item
        title='PRECIPITATION'
        num={precipitation}
        unidad='%'
        conclusion={precipitation < 20 ? 'Low' : precipitation < 60 ? 'Moderate' : 'High'}
        barra
      />
    </section>
  )
}
