import './App.css';
import AboutUs from './component/about-us/AboutUs';
import ContactCTA from './component/contact/ContactCTA';
import Footer from './component/footer/Footer';
import Header from './component/header/header';
import TravelTogether from './component/hero-page/TravelTogether';
import Services from './component/service/Services';
import WhyChooseUs from './component/why-us/WhyChooseUs';


function App() {
  return (
    <div >
      <Header />
      <TravelTogether />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
