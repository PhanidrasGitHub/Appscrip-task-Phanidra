import styles from './Footer.module.css';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.newsletter}>
            <h3 className={styles.heading}>BE THE FIRST TO KNOW</h3>
            <p className={styles.text}>Sign up for updates from mettā muse.</p>
            <div className={styles.subscribeBox}>
              <input type="email" placeholder="Enter your e-mail..." className={styles.input} />
              <button className={styles.subBtn}>SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.contact}>
            <h3 className={styles.heading}>CALL US</h3>
            <p className={styles.text}>+44 221 133 5360</p>
            <p className={styles.text}>customercare@mettamuse.com</p>
            <h3 className={styles.heading} style={{marginTop: '20px'}}>CURRENCY</h3>
            <p className={styles.text}>🇺🇸 USD</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.col}>
            <h3 className={styles.heading}>mettā muse</h3>
            <ul className={styles.list}>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3 className={styles.heading}>QUICK LINKS</h3>
            <ul className={styles.list}>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3 className={styles.heading}>FOLLOW US</h3>
            <div className={styles.socials}>
              <span><FaInstagram/></span> <span><FaLinkedin/></span>
            </div>
            <h3 className={styles.heading} style={{marginTop: '30px'}}>mettā muse ACCEPTS</h3>
            <div className={styles.payments}>
              {/* Add payment icon placeholders */}
              <div className={styles.payIcon}><img src='/payon.svg'/></div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}