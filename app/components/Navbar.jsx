import style from "./Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.home}>
        <div className={style.homeT}>
          <Link href="#About">Mario Lujan</Link>
        </div>
      </div>
      <div className={style.others}>
        <div className={style.projectsT}>
          <Link href="#Projects">Projects</Link>
        </div>
        <div className={style.techT}>
          <Link href="#Technologies">Technologies</Link>
        </div>
        <div className={style.contacT}>
          <Link href="#Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
