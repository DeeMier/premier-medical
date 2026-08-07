import "./Hero.css";
import hospitalImage from "../../assets/images/hospital-hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">Trusted Healthcare Since 1998</p>

        <h1>
          Compassionate Care
          <br />
          For Every Patient
        </h1>

        <p className="hero-description">
          Premier Medical provides exceptional healthcare with experienced
          physicians, advanced technology, and personalized treatment plans.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Book Appointment</button>
          <button className="secondary-btn">Patient Portal</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={hospitalImage}
          alt="Doctors providing medical care"
        />
      </div>
    </section>
  );
}

export default Hero;