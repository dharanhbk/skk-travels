import "./Services.css";
import family from "../../assets/services/family-trip.png";
import temple from "../../assets/services/temple-tour.png";
import corporate from "../../assets/services/corporate-outing.png";
import wedding from "../../assets/services/wedding-travel.png";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Perfect For</h2>
      <p className="services-subtitle">
        Comfortable group travel for every occasion
      </p>

      <div className="services-grid">
        <div className="service-card">
          <img src={family} alt="Family Trips" />
          <div className="service-title">Family Trips</div>
        </div>

        <div className="service-card">
          <img src={temple} alt="Temple Tours" />
          <div className="service-title">Temple Tours</div>
        </div>

        <div className="service-card">
          <img src={corporate} alt="Corporate Outings" />
          <div className="service-title">Corporate Outings</div>
        </div>

        <div className="service-card">
          <img src={wedding} alt="Wedding Travel" />
          <div className="service-title">Wedding Travel</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
