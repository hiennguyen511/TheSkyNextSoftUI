"use client";
import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneLike } from "react-icons/ai";
import { GiMightySpanner, GiSmart, GiStrong } from "react-icons/gi";
import { SiEsotericsoftware } from "react-icons/si";
import { FaComputer} from "react-icons/fa6";
import { IoSpeedometer } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  // const images = [
  //   "/AnhIT3.jpg",
  //   "https://pizza-time-with-react.vercel.app/static/media/section-one-1440.bd60dc8a558f85b4ffe7.webp",
  //   "https://etsgroup.vn/wp-content/uploads/2022/01/Ets-banner.jpg",
  // ];

  // const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === images.length - 1 ? 0 : prevSlide + 1
  //     );
  //   }, 4000);

  //   return () => clearInterval(intervalId);
  // }, []);
  

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={styles.wrap}>
      <Image src="/bg.png" alt="" width={1200} height={500} className="relative w-full imagebg h-auto "/>

      <div className=" pb-5 absolute top-40 left-40" data-aos="fade-down">
        <p className="text-center text-sky-600 text-4xl pb-5">CODING THE FUTURE</p>
        <h1 className="text-green-700 font-bold text-center text-5xl" >SMART - SPEED - STRONG - SECURE</h1>
      </div>

      <div className="py-14 background">
        <h1 className="pb-4 text-center text-3xl font-semibold">GIÁ TRỊ CỦA CHÚNG TÔI NẰM Ở ĐÂU?</h1>
        <p className="text-center pb-14 text-lg font-light italic">Luôn đưa ra những giải pháp công nghệ tuyệt vời</p>
        <div className="container " data-aos="fade-down">
          <div className="flex gap-6 ">
            <div className="column-3 flex items-center flex-col gap-3 shadow-lg p-5 py-9 bg-white hover:shadow-2xl w-1/4" >
                <div className="text-6xl text-green-700"><GiSmart /></div>
                <h2 className=" text-lg font-semibold">Smart</h2> 
                <span className="text-center p-5 ">Tối ưu nhưng thuật toán đưa ra những sản phẩm với kết quả cao như 
                  mong muốn và hiệu xuất cao
                </span>
            </div>
            <div className="column-3 flex items-center flex-col gap-3 shadow-lg p-5 py-9  bg-white hover:shadow-2xl w-1/4" >
                <div className="text-6xl text-green-700"><IoSpeedometer /></div>
                <h2 className=" text-lg font-semibold">Speed</h2>
                <p className="text-center p-5">Tốc độ phát triển phần mềm, hiệu suất của phần mềm,
                 tốc độ triển khai, và khả năng phản hồi của ứng dụng. 
                </p>
            </div>
            <div className="column-3 flex items-center flex-col gap-3 shadow-lg p-5 py-9  bg-white hover:shadow-2xl w-1/4" >
                <div className="text-6xl text-green-700" ><GiStrong /></div>
                <h2 className=" text-lg font-semibold ">Strong</h2>
                <p className="text-center p-5">Các tính năng, thiết kế, hoặc hệ thống mà có độ bền, hiệu suất và độ tin cậy cao
                </p>
            </div>
            <div className="column-3 flex items-center flex-col gap-3 shadow-lg p-5 py-9  bg-white hover:shadow-2xl w-1/4" >
                <div className="text-6xl text-green-700"><GrSecure /></div>
                <h2 className=" text-lg font-semibold">Secure</h2>
                <p className="text-center p-5">Bảo vệ thông tin cá nhân của người dùng, bảo vệ doanh nghiệp khỏi những rủi ro pháp lý và tài chính
                </p>
            </div>
          </div>
        </div>
      </div>
      <div className="background py-14">
        <div className="container">
        
         
          <div className="grid grid-cols-2 gap-5">
          <div className="col-span-1">
              <div>
              <h1 className="pb-3  text-3xl font-semibold text-green-700">SkyNextSoft</h1>
              <h2 className=" pb-5 text-lg font-light italic">MANG LẠI NHỮNG DỊCH VỤ PHÁT TRIỂN PHẦM MỀM CAO NHẤT</h2>
                <ul className=" ps-10 mb-5">
                  <li data-aos="fade-right" data-aos-delay="100" className="border-b mb-2 w-2/4 hover:text-neutral-300">Thiết kế Website
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200" className="border-b mb-2 w-2/4 hover:text-neutral-300">Thiết kế hệ thống
                  </li>
                  <li data-aos="fade-right" data-aos-delay="300" className="border-b mb-2 w-2/4 hover:text-neutral-300">Giải pháp CNTT
                  </li>
                  <li data-aos="fade-right" data-aos-delay="400" className="border-b mb-2 w-2/4 hover:text-neutral-300"> Thiết kế App Mobile
                  </li>
                </ul>

              </div>
              <Link href="" className="px-5 py-3 font-semibold text-white bg-green-700 rounded-3xl border block w-48 hover:opacity-90">Khám phá dịch vụ</Link>
            </div>
            <div className="col-span-1" data-aos="fade-left">
              <div>
                <Image src="/software.avif" alt="" width={1000} height={1000} className="imagebgg"/>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>

      {/* <div className={styles.wrapNoneFlex}>
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
       */}

      
    </div>
  );
};

export default Home;
