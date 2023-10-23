import React from 'react'
import styles from './Highlights.module.css'
import Item from './Item'
import ItemSunriseSunset from './ItemSunriseSunset'
import ItemBarraCircular from './ItemBarraCircular'
export default function Highlights () {
  return (
    <section className={styles.areaHigh}>
      <ItemBarraCircular
        num={6}
        max={15}
        title='UV INDEX'
      />

      <Item
        title='WIND STATUS'
        num={11.12}
        unidad='Km/h'
        texto='Lorem  Vipraesentium uptates labore, cum officia amet maiores nostrum!'
      />
      <ItemSunriseSunset
        sunrise='6:35'
        sunset='5:42'
      />

      <Item
        title='HUMEDITY'
        num={12}
        unidad='%'
        conclusion='Normal'
        barra
      />

      <Item
        title='VISIBILITY'
        num={6.1}
        unidad='Km'
        conclusion='Average'
      />

      <Item
        title='AIR QUALITY'
        num={105}
        conclusion='Unhealthy'
        barra
      />
    </section>
  )
}
