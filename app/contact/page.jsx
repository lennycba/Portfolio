"use client";
import React, { useState, useEffect } from "react";
import styles from "./contact.module.css";
import Calendly from "../components/Calendly/Calendly";
import Footer from "../components/Footer/Footer";
import { useForm, ValidationError } from "@formspree/react";
import FormComplete from "../components/FormComplete/FormComplete";

function Contact() {
  const [formClean, setFormClean] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("mdorygvl");

  useEffect(() => {
    if (state.succeeded) {
      setFormClean({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleInputs = (e) => {
    const { id, value } = e.target;

    if (formClean[id] !== value) {
      setFormClean({
        ...formClean,
        [id]: value,
      });
    }
  };

  return (
    <div className={styles.container} id="Contact">
      <div className={styles.titCont}>
        <h1>Contacto</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          {!state.succeeded?
          <div className={styles.titForm}>
            <h2>Déjame un mensaje</h2>
            <h4>Estoy ansioso de contribuir a tu proyecto</h4>
          </div>:null}
          {!state.succeeded?
          <div className={styles.formCont}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.name}>
                <label>Nombre:</label>
                <input
                  id="name"
                  name="name"
                  value={formClean.name}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className={styles.email}>
                <label>Correo Electrónico:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formClean.email}
                  onChange={handleInputs}
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className={styles.message}>
                <label>Mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formClean.message}
                  onChange={handleInputs}
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className={styles.buttonCont}>
                <button
                  type="submit"
                  className={styles.button}
                  disabled={state.submitting}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div> : <FormComplete />}
        </div>
        <div className={styles.right}>
          <h2 className={styles.titContact}>
            O si prefieres, puedes agendar una cita:
          </h2>
          <Calendly />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
