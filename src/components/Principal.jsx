import React from 'react'
// import nube from '../nube.png'
import sol from '../sun.png'
import luna from '../luna.png'
import styles from './Principal.module.css'
import MaxMin from './MaxMin'
import { climaOpc } from '../utils/climaOpc'

export default function Principal ({ weathercode, dia, hora, minuto, temp, max, min }) {
  return (
    <div className={styles.areaPrincipal}>
      <div className={styles.areaNubeDia}>
        <span className={styles.clima}>
          <img src={climaOpc[weathercode]} alt='nube' />
        </span>
        <div className={styles.horaDia}>
          <section className={styles.ciudadHora}>
            <h1>Córdoba</h1>
            <h2>{`${dia}, ${hora}:${minuto}`}</h2>
          </section>
          <section className={styles.tempActual}>
            <h2>{temp}</h2>
            <h3>°C</h3>
          </section>
        </div>
      </div>
      <div className={styles.areaMaxMin}>
        <MaxMin
          temp={max}
          text='High'
          icon={sol}
          alt='sol'
        />

        <MaxMin
          temp={min}
          text='Low'
          icon={luna}
          alt='luna'
        />
      </div>
    </div>

  )
}
