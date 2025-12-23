import "./WhyChooseUs.css";
// import {
//   FaChair,
//   FaSnowflake,
//   FaBroom,
//   FaUserTie,
// } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="why-us" id="services">
      <h2>Why Choose Sembaruthi Travels?</h2>

      <div className="why-grid">
        <div className="why-card">
          {/* <FaChair className="icon" /> */}
          <h3>Push Back Seats</h3>
          <p>Relax fully on long journeys with spacious seating.</p>
        </div>

        <div className="why-card">
          {/* <FaSnowflake className="icon" /> */}
          <h3>AC & Non-AC Options</h3>
          <p>Choose comfort that fits your travel needs.</p>
        </div>

        <div className="why-card">
          {/* <FaBroom className="icon" /> */}
          <h3>Clean & Well Maintained</h3>
          <p>Spotless vehicles, cleaned before every trip.</p>
        </div>

        <div className="why-card">
          {/* <FaUserTie className="icon" /> */}
          <h3>Experienced Drivers</h3>
          <p>Professional drivers for a safe journey.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
