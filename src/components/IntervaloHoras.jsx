import React from 'react'
import styles from './IntervaloHoras.module.css'
import IntervaloBarra from './IntervaloBarra'

export default function IntervaloHoras () {
  return (
    <div className={styles.areaIntervalo}>
      <h2>Intervalos de Horas</h2>
      <div>
        <IntervaloBarra />
      </div>
    </div>
  )
}
