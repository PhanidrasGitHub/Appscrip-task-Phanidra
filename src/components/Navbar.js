import styles from './Navbar.module.css';
import { RiSearch2Line } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { TbShoppingBagMinus } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";


export default function Navbar() {
  const navLinks = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];
  
  return (
    <nav className={styles.navContainer}>
      <div className="container">
        {/* Top Row: Mobile & Desktop Layout */}
        <div className={styles.topBar}>
          <div className={styles.leftGroup}>
            {/* Hamburger menu only visible on mobile */}
            <span className={styles.hamburger}>☰</span>
            <div className={styles.logoIcon}>
              <img src="/Logo.png" alt="Mettā Muse Logo" width="35" height="35" />
            </div>
          </div>

          <div className={styles.mainLogo}>LOGO</div>

          <div className={styles.icons}>
            <span className={styles.icon}><RiSearch2Line/></span>
            <span className={styles.icon}><GoHeart/></span>
            <span className={styles.icon}><TbShoppingBagMinus/></span>
         
            <span className={`${styles.icon} ${styles.desktopOnly}`}><IoPersonOutline/></span>
            <select className={`${styles.langSelect} ${styles.desktopOnly}`}>
              <option>ENG</option>
            </select>
          </div>
        </div>

        {/* Navigation Links: Centered for Desktop, Hidden for Mobile */}
        <div className={styles.menuLinks}>
          {navLinks.map(link => (
            <span key={link} className={styles.linkItem}>{link}</span>
          ))}
        </div>
      </div>
    </nav>
  );
}