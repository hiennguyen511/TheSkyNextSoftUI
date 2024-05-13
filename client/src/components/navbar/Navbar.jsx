"use client"
import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`${styles.container} ${isSticky ? styles.sticky : ''}`}>
      <Link href="/" className= "flex items-center flex-wrap text-2xl">
        <Image src="/logo-removebg - Copy.png" alt="" width={30} height={40} className="imglogo" />
        <h2 className={` font-semibold ${isSticky ? "text-green-700" : "" }`}>SkyNextSoft</h2>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
