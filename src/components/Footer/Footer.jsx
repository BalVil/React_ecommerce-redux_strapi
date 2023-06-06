import Payment from "../../images/payment.png";
import Logo from "../../images/elvisies.svg";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <ul className="footerTop">
        <li className="footerItem">
          <h2>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </li>
        <li className="footerItem">
          <h2>Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </li>
        <li className="footerItem">
          <h2>About</h2>
          <span>
            Elvisies.com is your one-stop shop for music-related gifts! We are a
            group of music enthusiasts who believe that nothing beats sharing
            the joy of music with others. Our love of music began at a young age
            and has remained a driving force in everything we do. We founded
            Elvisies.com because we wanted to create a place where music fans
            like us could find unique and fun gifts that celebrated their
            passion for music. At Elvisies.com, we believe that music has the
            power to unite, inspire, and uplift people. That's why we're
            committed to providing a diverse range of high-quality products that
            will make you happy.
          </span>
        </li>
        <li className="footerItem">
          <h2>Contact</h2>
          <span>
            We love hearing from our customers! Please contact us if you have
            any questions, feedback, or concerns. You can reach us by email at
            info@elvisies.com or by completing the contact form on our website.
            Our customer service team will respond to your inquiry as soon as
            possible, usually within 24 hours. You can also follow us on social
            media to stay up to date on our latest news, promotions, and product
            releases.
          </span>
        </li>
      </ul>
      <ul className="footerBottom">
        <li className="footerLeft">
          <span className="footerLogo">
            <img src={Logo} alt="logo" width="60" />
          </span>
          <span className="copyright">
            Elvisies.com&copy; 2022-2023 All rights reserved
          </span>
        </li>
        <li className="footerRight">
          <img src={Payment} alt="payment options" />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
