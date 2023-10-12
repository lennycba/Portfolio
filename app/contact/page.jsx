import React from "react";
import styles from "./contact.module.css";
import Calendly from "../components/Calendly/Calendly";
import Footer from "../components/Footer/Footer";

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
            <h4>Estoy ansioso de contribuir a tu proyecto</h4>
          </div>
          <div className={styles.formCont}>
            <form className={styles.form}>
              <div className={styles.name}>
                <label>Nombre:</label>
                <input required />
              </div>
              <div className={styles.email}>
                <label>Correo Electrónico:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.message}>
                <label>Mensaje:</label>
                <textarea id="message" name="message" required />
              </div>
              <div className={styles.buttonCont}>
                <button type="submit" className={styles.button}>Enviar</button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.titContact}>O si prefieres, puedes agendar una cita:</h2>
          <Calendly />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
