import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

function About() {
  return (
    <div className={styles.container} id="About">
      <div className={styles.titCont}>
        <h1>About me</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Welcome!!!</h2>
          <h1>I'm Mario Lujan</h1>
          <h3>Backend Oriented Full Stack web Developer</h3>
          <p>
            Mi amor por la tecnología me llevó a dar un giro luego de graduarme
            como Arquitecto
            <br /> y afrontar un nuevo reto como{" "}
            <b>Full Stack Web Developer.</b> <br />
            Tengo fascinación por la creación de sistemas eficientes, escalables
            y seguros
            <br /> que respalden la funcionalidad esencial de las aplicaciones.
            <br />¡Estoy ansioso por explorar nuevas oportunidades y contribuir al éxito de un equipo
            dedicado!
            <br /> <b>Si crees que podría ser una adición valiosa a tu equipo, ¡no
            dudes en contactarte conmigo!</b>
          </p>
        </div>
          <div className={styles.img}>
            <Image src="/me.jpg" width={500} height={500} alt="Me" />
          </div>
      </div>
    </div>
  );
}

export default About;
