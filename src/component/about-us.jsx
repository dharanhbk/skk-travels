import React from 'react';

const AboutUs = () => {
  return (
    <section style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h2 style={styles.heroTitle}>Travel Comfortably with SKK-TRAVELS</h2>
        <p style={styles.heroText}>
          Providing safe, comfortable, and reliable tempo traveller services tailored for memorable journeys.
        </p>
        <img
          src="https://example.com/tempo-traveller-hero.jpg" // Replace with your authentic image URL
          alt="Tempo Traveller Vehicle"
          style={styles.heroImage}
        />
      </div>

      {/* Our Story */}
      <div style={styles.storySection}>
        <h3 style={styles.sectionTitle}>Our Story</h3>
        <p style={styles.storyText}>
          Founded in 2023, TempoTraveller has grown from a small local service to a trusted name in group travel. Our commitment to safety,
          comfort, and hospitality has taken us on thousands of journeys across beautiful destinations.
        </p>
      </div>

      {/* Meet The Team */}
      <div style={styles.teamSection}>
        <h3 style={styles.sectionTitle}>Meet The Team</h3>
        <div style={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.name} style={styles.teamCard}>
              <img
                src={member.photo}
                alt={member.name}
                style={styles.teamPhoto}
              />
              <h4 style={styles.teamName}>{member.name}</h4>
              <p style={styles.teamRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values & Services */}
      <div style={styles.valuesSection}>
        <h3 style={styles.sectionTitle}>Our Core Values & Services</h3>
        <ul style={styles.valuesList}>
          {valuesServices.map((item) => (
            <li key={item.title} style={styles.valueItem}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Testimonials */}
      <div style={styles.testimonialsSection}>
        <h3 style={styles.sectionTitle}>What Our Customers Say</h3>
        <div style={styles.testimonialsGrid}>
          {testimonials.map((testi, index) => (
            <blockquote key={index} style={styles.testimonialCard}>
              <p style={styles.testimonialText}>"{testi.feedback}"</p>
              <footer style={styles.testimonialAuthor}>- {testi.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div style={styles.ctaSection}>
        <h3 style={styles.ctaTitle}>Ready to travel with us?</h3>
        <button style={styles.ctaButton} onClick={() => alert('Redirect to booking page')}>
          Book Your Journey Now
        </button>
      </div>
    </section>
  );
};

// Sample data - replace with your real data
const teamMembers = [
  {
    name: 'Ravi Kumar',
    role: 'Founder & CEO',
    photo: 'https://example.com/team/ravi.jpg',
  },
  {
    name: 'Anita Singh',
    role: 'Operations Manager',
    photo: 'https://example.com/team/anita.jpg',
  },
  {
    name: 'Sameer Patel',
    role: 'Lead Driver',
    photo: 'https://example.com/team/sameer.jpg',
  },
];

const valuesServices = [
  { title: 'Safety', description: 'Our top priority is your safety on every trip.' },
  { title: 'Comfort', description: 'Spacious, well-maintained vehicles for a relaxing ride.' },
  { title: 'Hospitality', description: 'Friendly staff ensuring a pleasant travel experience.' },
  { title: '24/7 Support', description: 'We are here whenever you need us.' },
];

const testimonials = [
  { name: 'Priya Sharma', feedback: 'Exceptional service and very comfortable rides!' },
  { name: 'Arjun Mehta', feedback: 'Reliable and friendly drivers, highly recommended.' },
  { name: 'Sneha Desai', feedback: 'Made our group trip memorable and hassle-free.' },
];

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    padding: '30px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  heroTitle: {
    fontSize: '2.8rem',
    color: '#004080',
    marginBottom: '15px',
  },
  heroText: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heroImage: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '8px',
  },
  storySection: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#004080',
    borderBottom: '3px solid #ffcc00',
    paddingBottom: '8px',
    marginBottom: '20px',
  },
  storyText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
  teamSection: {
    marginBottom: '40px',
  },
  teamGrid: {
    display: 'flex',
    gap: '30px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  teamCard: {
    width: '200px',
    textAlign: 'center',
  },
  teamPhoto: {
    width: '100%',
    borderRadius: '50%',
    marginBottom: '15px',
  },
  teamName: {
    fontSize: '1.2rem',
    margin: '0 0 5px',
    color: '#004080',
  },
  teamRole: {
    fontSize: '1rem',
    color: '#666',
    margin: 0,
  },
  valuesSection: {
    marginBottom: '40px',
  },
  valuesList: {
    listStyle: 'none',
    padding: 0,
  },
  valueItem: {
    fontSize: '1.1rem',
    marginBottom: '10px',
  },
  testimonialsSection: {
    marginBottom: '40px',
  },
  testimonialsGrid: {
    display: 'flex',
    gap: '25px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  testimonialCard: {
    width: '280px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '6px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    fontStyle: 'italic',
  },
  testimonialText: {
    marginBottom: '15px',
    fontSize: '1rem',
  },
  testimonialAuthor: {
    textAlign: 'right',
    fontWeight: '600',
    color: '#004080',
  },
  ctaSection: {
    textAlign: 'center',
    marginTop: '50px',
  },
  ctaTitle: {
    fontSize: '2rem',
    color: '#004080',
    marginBottom: '20px',
  },
  ctaButton: {
    backgroundColor: '#ffcc00',
    border: 'none',
    padding: '12px 28px',
    fontSize: '1.2rem',
    borderRadius: '6px',
    color: '#004080',
    cursor: 'pointer',
    fontWeight: '600',
  },
};

export default AboutUs;
