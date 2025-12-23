import "./TravelTogether.css";

const TravelTogether = () => {
  return (
    <section className="travel-hero" id="home">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>
          Travel Together.
          <span> Travel Comfortably.</span>
        </h1>

        <p>
          Premium Traveller Rentals <br />
          for Group Travel
        </p>

        <div className="hero-actions">
          <a href="tel:9842927789" className="hero-call">
            Call Now
          </a>

          <a
            href="https://wa.me/919750557789"
            target="_blank"
            rel="noreferrer"
            className="hero-whatsapp"
          >
            WhatsApp Booking
          </a>
        </div>
      </div>
    </section>
  );
};

export default TravelTogether;
