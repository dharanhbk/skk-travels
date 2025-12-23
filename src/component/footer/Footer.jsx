import "./Footer.css";
// import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h3>Sembaruthi Travels</h3>
          <p>
            Comfortable and reliable group travel services.
            <br />
            Travel together. Travel comfortably.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#traveller">Traveller</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>

          <a href="tel:9842927789">
            {/* <FaPhoneAlt /> */}
             98429 27789
          </a>

          <a href="tel:9750557789">
            {/* <FaPhoneAlt /> */}
             97505 57789
          </a>

          <a
            href="https://wa.me/919750557789"
            target="_blank"
            rel="noreferrer"
            className="whatsapp"
          >
            {/* <FaWhatsapp /> */}
             WhatsApp Booking
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Sembaruthi Travels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
