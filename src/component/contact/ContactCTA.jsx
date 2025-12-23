import "./ContactCTA.css";
// import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section className="contact-cta" id="contact">
      <div className="cta-overlay"></div>

      <div className="cta-content">
        <h2>Planning a Group Trip?</h2>
        <p>Travel in comfort with Sembaruthi Travels</p>

        <div className="cta-actions">
          <a href="tel:9842927789" className="cta-call">
            {/* <FaPhoneAlt /> */}
            Call Now
          </a>

          <a
            href="https://wa.me/919750557789"
            target="_blank"
            rel="noreferrer"
            className="cta-whatsapp"
          >
            {/* <FaWhatsapp />  */}
            WhatsApp Booking
          </a>
        </div>

        <div className="cta-numbers">
          98429 27789 &nbsp;|&nbsp; 97505 57789
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
