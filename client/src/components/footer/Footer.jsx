import Image from "next/image";
import FooterContact from "./FooterContact";
import FooterSocials from "./FooterSocials";
import FooterConnect from "./Footerconnect";
import styles from "./footer.module.css";
import License from "./License";
const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.footerFix}>
        <div className={styles.footerLeft}>
          <Image
            src="/logo-removebg.png"
            alt="LogoImage"
            width={170}
            height={170}
            className={styles.img}
          />
          {/* <p>Số 7, Dãy 2, 651 Minh Khai, Hai Bà Trưng, Hà Nội</p> */}
        </div>
        <div className={styles.footerRight}>
          <FooterSocials />
          <FooterContact />
          <FooterConnect />
        </div>
        </div>
        
      </footer>
      <div className={styles.licence}>
        <License />
      </div>
    </div>
  );
};

export default Footer;
