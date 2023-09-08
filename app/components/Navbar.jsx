import style from "./Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.home}>
        <div>
          <Link href="/">Home</Link>
        </div>
      </div>
      <div className={style.others}>
        <div>
          <Link href="#About">About</Link>
        </div>
        <div>
          <Link href="#Projects">Projects</Link>
        </div>
        <div>
          <Link href="#Technologies">Technologies</Link>
        </div>
        <div>
          <Link href="#Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
