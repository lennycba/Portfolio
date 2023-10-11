import React from "react";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.container} id="Contact">
      <div className={styles.titCont}>
        <h1>Contacto</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.titForm}>
            <h2>Déjame un mensaje</h2>
            <h4>
              Estoy ansioso de contribuir a tu proyecto
            </h4>
          </div>
          <div className={styles.formCont}>
            <form className={styles.form}>
              <div className={styles.name}>
                <label>Nombre:</label>
                <input required/>
              </div>
              <div className={styles.email}>
                <label>Correo Electrónico:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.message}>
                <label>Mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  required
                />
              </div>
              <div className={styles.button}>
              <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.otherContacts}>
          <h2>O si no puedes escribirme a:</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
