import React from "react";
import styles from "./technologies.module.css";
import Image from "next/image";

export default function Technologies() {
  const defaultWidth = 110;

  const technologiesLeft = [
    { name: "HTML", icon: "/HTML.gif", width: defaultWidth },
    { name: "CSS", icon: "/CSS4.gif", width: defaultWidth },
    { name: "REACT", icon: "/REACT.gif", width: defaultWidth },
    { name: "JAVASCRIPT", icon: "/JS1.gif", width: defaultWidth },
    { name: "REDUX", icon: "/REDUX.gif", width: defaultWidth },
  ];

  const technologiesRight = [
    { name: "NODEJS", icon: "/NODE2.gif", width: defaultWidth },
    { name: "SEQUELIZE", icon: "/SEQUELIZE.gif", width: defaultWidth },
    { name: "EXPRESS", icon: "/express.png", width: defaultWidth },
    { name: "POSTGRESQL", icon: "/postgress4.png", width: defaultWidth },
    { name: "GITHUB", icon: "/github5.png", width: defaultWidth },
  ];

  return (
    <div className={styles.container}>
      <h1 id="Technologies">Technologies</h1>
      <div className={styles.box}>
        <div className={styles.column}>
          <ul className={styles.rowContainer}>
            {technologiesLeft.map((tech, index) => (
              <li key={index} className={styles.row}>
                <Image className={styles.img} src={tech.icon} alt={tech.name} width={tech.width} height={tech.width} />
                <div className={styles.tCont}>
                <p className={styles.pText}>{tech.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <ul className={styles.rowContainer}>
            {technologiesRight.map((tech, index) => (
              <li key={index} className={styles.row}>
                <Image className={styles.img} src={tech.icon} alt={tech.name} width={tech.width} height={tech.width} />
                <div className={styles.tCont}>
                    <p className={styles.pText}>{tech.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}