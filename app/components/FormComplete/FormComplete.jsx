import React from 'react'
import styles from './FormComplete.module.css'
function FormComplete() {
  return (
    <div className={styles.messageCont}>
        <h1>El mensaje ha sido recibido!!!</h1>
        <h3>Me pondré en contacto lo antes posible.</h3>
    </div>
  )
}

export default FormComplete