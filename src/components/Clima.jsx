import React from 'react'
import Principal from './Principal'
import IntervaloHoras from './IntervaloHoras'
import Higlights from './Highlights'
import styles from './Clima.module.css'
export default function Clima () {
  return (
    <div className={styles.areaClima}>
      <header>
        <Principal />
      </header>
      <main>
        <Higlights />
      </main>
      <footer>
        <IntervaloHoras />
      </footer>
    </div>
  )
}
