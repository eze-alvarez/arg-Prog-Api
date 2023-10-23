import React from 'react'
import styles from './MaxMin.module.css'
export default function MaxMin ({ temp, text, icon, alt }) {
  return (
    <div className={styles.tempArea}>
      <div className={styles.grados}>
        <h2>{temp}</h2>
        <h3>°C</h3>
      </div>
      <div className={styles.infoImg}>
        <h2>{text}</h2>
        <span>
          <img src={icon} alt={alt} />
        </span>
      </div>
    </div>
  )
}
