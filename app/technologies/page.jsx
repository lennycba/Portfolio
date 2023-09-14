import React from "react";
import styles from "./technologies.module.css";
import Image from "next/image";

export default function Technologies() {
  const defaultWidth = 110;

  const technologiesLeft = [
    { name: "HTML", icon: "/HTML10.png", width: defaultWidth },
    { name: "CSS", icon: "/CSS13.png", width: defaultWidth },
    { name: "REACT", icon: "/REACT10.png", width: defaultWidth },
    { name: "JAVASCRIPT", icon: "/JS10.png", width: defaultWidth },
    { name: "REDUX", icon: "/REDUX10.png", width: defaultWidth },
  ];

  const technologiesRight = [
    { name: "NODEJS", icon: "/NODE10.png", width: defaultWidth },
    { name: "SEQUELIZE", icon: "/SEQ10.png", width: defaultWidth },
    { name: "EXPRESS", icon: "/EXP11.png", width: defaultWidth },
    { name: "POSTGRESQL", icon: "/POSTGRE10.png", width: defaultWidth },
    { name: "GITHUB", icon: "/GITHUB11.png", width: defaultWidth },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titCont} id="Technologies">
        <h1>Technologies</h1>
      </div>
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