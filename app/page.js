import Image from "next/image";
import img from '../public/next.svg'
import styles from "./page.module.css";
import Contact from "./contact/page";
import About from "./about/page";
import Technologies from "./technologies/page";
import Projects from "./projects/page"

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  );
}
