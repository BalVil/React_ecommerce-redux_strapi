import { useState } from "react";
import GDPR from "components/FooterModals/GDPR";
import Terms from "components/FooterModals/Terms";
import Privacy from "components/FooterModals/Privacy";
import About from "components/FooterModals/AboutUs";
import Contact from "components/FooterModals/ContactUs";
import Return from "components/FooterModals/Return";
import Delivery from "components/FooterModals/Delivery";
import Warranty from "components/FooterModals/Warranty";

import Payment from "../../images/payment.png";
import Logo from "../../images/logo.png";
import styles from "./Footer.module.scss";

function Footer() {
  const [isOpenGDPR, setIsOpenGDPR] = useState(false);
  const [isOpenTerms, setIsOpenTerms] = useState(false);
  const [isOpenPrivacy, setIsOpenPrivacy] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [isOpenReturn, setIsOpenReturn] = useState(false);
  const [isOpenDelivery, setIsOpenDelivery] = useState(false);
  const [isOpenWarranty, setIsOpenWarranty] = useState(false);

  return (
    <>
      <footer className={styles.footer} id="footer">
        <ul className={styles.top}>
          <li className={styles.item}>
            <h2>Customer Service</h2>
            <a href="#footer" onClick={() => setIsOpenGDPR(true)}>
              GDPR
            </a>
            <a href="#footer" onClick={() => setIsOpenTerms(true)}>
              Terms & Conditions
            </a>
            <a href="#footer" onClick={() => setIsOpenPrivacy(true)}>
              Privacy Policy
            </a>
            <a href="#footer">Products</a>
          </li>
          <li className={styles.item}>
            <h2>Links</h2>
            <a href="#footer" onClick={() => setIsOpenAbout(true)}>
              About us
            </a>
            <a href="#footer" onClick={() => setIsOpenContact(true)}>
              Contact us
            </a>
            <a href="#footer">Orders</a>
            <a href="#footer" onClick={() => setIsOpenReturn(true)}>
              Returns
            </a>
            <a href="#footer" onClick={() => setIsOpenDelivery(true)}>
              Delivery info
            </a>
            <a href="#footer" onClick={() => setIsOpenWarranty(true)}>
              Warranty info
            </a>
          </li>
          <li className={styles.about}>
            <h2>About</h2>
            <span className={styles.aboutText}>
              We are passionate about music and believe that it can bring joy,
              inspiration, and connection to people from all walks of life. We
              have a wide selection of products inspired by music legends,
              including Elvis Presley, in our store. Elvis Presley, we believe,
              was not only a talented musician, but also an icon who embodies
              the power of music to unite people and break down barriers. That
              is why we have a selection of Elvis-inspired gifts in our catalog,
              such as t-shirts, posters, and collectibles that honor his music
              and legacy.
            </span>
          </li>
        </ul>
        <ul className={styles.bottom}>
          <li className={styles.left}>
            <span className={styles.logo}>
              <img src={Logo} alt="logo" />
            </span>
            <span className={styles.copyright}>
              Elvisies.com&copy; 2022-2023 All rights reserved
            </span>
          </li>
          <li className={styles.right}>
            <img src={Payment} alt="payment options" />
          </li>
        </ul>
      </footer>
      {isOpenGDPR && <GDPR showGDPR={setIsOpenGDPR} />}
      {isOpenTerms && <Terms showTerms={setIsOpenTerms} />}
      {isOpenPrivacy && <Privacy showPrivacy={setIsOpenPrivacy} />}
      {isOpenAbout && <About showAbout={setIsOpenAbout} />}
      {isOpenContact && <Contact showContact={setIsOpenContact} />}
      {isOpenReturn && <Return showReturn={setIsOpenReturn} />}
      {isOpenDelivery && <Delivery showDelivery={setIsOpenDelivery} />}
      {isOpenWarranty && <Warranty showWarranty={setIsOpenWarranty} />}
    </>
  );
}

export default Footer;
