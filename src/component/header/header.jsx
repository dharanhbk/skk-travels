import "./header.css";
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        {/* <span className="logo-text">Sembaruthi</span>
        <span className="logo-sub">Travels</span> */}
        <img className="logo-img" src={logo} alt="Sembaruthi Travels Logo"/>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Contact Actions */}
      <div className="actions">
        <a href="tel:9842927789" className="call-btn">
          <span>98429 27789</span>
        </a>

        <a
          href="https://wa.me/919750557789"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
