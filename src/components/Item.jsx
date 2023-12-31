import React from 'react'
import styles from './Item.module.css'
export default function Item ({ title, num, unidad, texto, conclusion, barra }) {
  const porcentajeCircle = num - 10
  return (
    <article className={styles.areaItem}>
      <div className={styles.containerNumUni}>
        <h4>{title}</h4>
        <div className={styles.numeroUnidad}>
          <h2>{num}</h2>
          <h4>{unidad}</h4>
        </div>
        <p>{texto}</p>
        <h3>{conclusion}</h3>
      </div>

      {
        barra && (
          <div className={styles.picture}>
            <div
              className={styles.barra}
              style={{
                height: `${num}%`
              }}
            />
            <div
              className={styles.circle}
              style={{
                bottom: `${porcentajeCircle}%`
              }}
            />
          </div>
        )
      }

    </article>
  )
}
