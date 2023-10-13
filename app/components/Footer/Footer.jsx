import React from 'react'
import styles from './Footer.module.css'


function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.footerCont}>
        <h1>{`Hecho con ❤️ por Mario Lujan ©️ ${currentYear}`}</h1>
    </div>
  )
}

export default Footer