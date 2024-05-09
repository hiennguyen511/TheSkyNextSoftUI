import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo }>
        <h2 className="text-green-600 font-semibold">SkyNextSoft</h2>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
