import React from 'react'
import styles from './ItemBarraCircular.module.css'
export default function ItemBarraCircular ({ num, max, title }) {
  const girar = Math.round((num / max) * 180)

  return (
    <article className={styles.areaItem}>
      <h4>{title}</h4>
      <div className={styles.gauge}>
        <div className={styles.gaugeBody}>
          <div
            className={styles.gaugeFill}
            style={{
              transform: `rotate(${girar}deg)`
            }}
          />
          <div className={styles.gaugeCover}>
            <h2>{num}</h2>
          </div>
        </div>
      </div>
    </article>
  )
}
