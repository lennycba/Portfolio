import React from 'react'
import styles from './contact.module.css'

function Contact() {
  return (
    <div id="Contact">
      <h1 className={styles.container}>Contact</h1>
        <form>
          <h2>Formulario de Contacto</h2>
          <div>
            <label>Nombre:</label>
            <input required />
          </div>
          <div>
            <label>Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div>
            <label>Mensaje:</label>
            <textarea id="message" name="message" className="form-control" required />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
  )
}

export default Contact