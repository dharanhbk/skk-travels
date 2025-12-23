import "./AboutUs.css";
import vechile from "../../assets/about-us.png"

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-content">
          <h2>About Sembaruthi Travels</h2>

          <p>
            Sembaruthi Travels is a trusted name in group travel, offering
            comfortable and reliable traveller rentals for families, corporate
            teams, and special occasions.
          </p>

          <p>
            We focus on safety, cleanliness, and comfort so that every journey
            feels relaxed and enjoyable from start to finish.
          </p>

          <div className="about-highlights">
            <div>
              <span>✔</span> Comfortable Push Back Seats
            </div>
            <div>
              <span>✔</span> Clean & Well-Maintained Vehicles
            </div>
            <div>
              <span>✔</span> Experienced & Professional Drivers
            </div>
            <div>
              <span>✔</span> On-Time & Reliable Service
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img
            src={vechile}
            alt="Sembaruthi Travels Traveller"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
