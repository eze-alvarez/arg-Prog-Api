import React from 'react'
import nube from '../nube.png'
import sol from '../sun.png'
import luna from '../luna.png'
import styles from './Principal.module.css'
import MaxMin from './MaxMin'

export default function Principal () {
  return (
    <div className={styles.areaPrincipal}>
      <div className={styles.areaNubeDia}>
        <span className={styles.clima}>
          <img src={nube} alt='nube' />
        </span>
        <div className={styles.horaDia}>
          <section className={styles.ciudadHora}>
            <h1>Cordoba</h1>
            <h2>Jueves, 15:15</h2>
          </section>
          <section className={styles.tempActual}>
            <h2>25</h2>
            <h3>°C</h3>
          </section>
        </div>
      </div>
      <div className={styles.areaMaxMin}>
        <MaxMin
          temp={37}
          text='High'
          icon={sol}
          alt='sol'
        />

        <MaxMin
          temp={15}
          text='Low'
          icon={luna}
          alt='luna'
        />
      </div>
    </div>

  )
}
