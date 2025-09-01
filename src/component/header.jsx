import React from 'react';
import logo from '../image.png';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} width="50" height="50" alt="SKK_TRAVELS"/>
      </div>
      <nav style={styles.nav}>
        <a href="/" style={styles.navLink}>Home</a>
        <a href="/services" style={styles.navLink}>Services</a>
        <a href="/fleet" style={styles.navLink}>Fleet</a>
        <a href="/about" style={{ ...styles.navLink, ...styles.activeLink }}>About Us</a>
        <a href="/contact" style={styles.navLink}>Contact</a>
      </nav>
      <div>
        <button style={styles.bookNowButton} onClick={() => alert('Redirect to booking page')}>
          Book Now
        </button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#004080', // deep blue brand color
    color: '#ffffff',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  logoContainer: {
    fontWeight: 'bold',
    fontSize: '1.8rem',
  },
  logoText: {
    margin: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  nav: {
    display: 'flex',
    gap: '25px',
    fontSize: '1rem'
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  activeLink: {
    borderBottom: '2px solid #ffcc00', // accent gold for active menu
    paddingBottom: '3px',
  },
  bookNowButton: {
    backgroundColor: '#ffcc00', // bright accent gold
    color: '#004080',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }
};

export default Header;
