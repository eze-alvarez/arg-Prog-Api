import React from 'react'
import up from '../up.png'
import down from '../down.png'
import styles from './ItemSunriseSunset.module.css'

export default function ItemSunriseSunset ({ sunrise, sunset }) {
  return (
    <article className={styles.areaItem}>
      <h4>SUNRISE & SUNSET</h4>
      <div className={styles.containerUp}>
        <span className={styles.boxImg}>
          <img src={up} alt='sunrise' />
        </span>
        <h3 className={styles.data}>
          {sunrise} AM
        </h3>
      </div>

      <div className={styles.containerDown}>
        <span className={styles.boxImg}>
          <img src={down} alt='sunset' />
        </span>
        <h3 className={styles.data}>
          {sunset} PM
        </h3>
      </div>
    </article>
  )
}
