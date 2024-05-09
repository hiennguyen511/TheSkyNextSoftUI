"use client";
import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneLike } from "react-icons/ai";
import { GiMightySpanner } from "react-icons/gi";
import { SiEsotericsoftware } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  const images = [
    "/AnhIT3.jpg",
    "https://pizza-time-with-react.vercel.app/static/media/section-one-1440.bd60dc8a558f85b4ffe7.webp",
    "https://etsgroup.vn/wp-content/uploads/2022/01/Ets-banner.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={styles.wrap}>
      <Image src="/it.avif" alt="" width={1200} height={500} className="relative w-full imagebg h-auto "/>

      <div className=" pb-5 absolute top-40 left-40">
        <div className="flex justify-center flex-wrap" data-aos="fade-right" >
          <Image src="/logo-removebg.png" alt="" height={500} width={500}/>
        </div>
        <h1 className="text-green-600 font-bold text-center text-4xl" data-aos="fade-left">SMART - SPEED - STRONG - SECURE</h1>
      </div>

      <div className={styles.wrapNoneFlex}>
        <div className={styles.containerCl}>
          <Link href="/contact">
            <div className={styles.tag}>
              <p>Uy tín - Tin cậy</p>
              <div className={styles.icon}>
                <AiTwotoneLike />
              </div>
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.tag}>
              <p>Hiệu quả - Tiết Kiệm</p>
              <div className={styles.icon}>
                <GiMightySpanner />
              </div>
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.tag}>
              <p>Chuyên nghiệp - Tận tâm</p>
              <div className={styles.icon}>
                <SiEsotericsoftware />
              </div>
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.tag}>
              <p>Đáp ứng nhanh chóng</p>
              <div className={styles.icon}>
                <FaComputer />
              </div>
            </div>
          </Link>
        </div>
      </div>
      

      
    </div>
  );
};

export default Home;
