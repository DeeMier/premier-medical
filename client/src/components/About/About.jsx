import "./About.css";
import aboutImage from "../../assets/images/about-hospital.jpg";

function About() {
  return (
    <section className="about">
      <div className="about-image">
        <img
          src={aboutImage}
          alt="Premier Medical Hospital"
        />
      </div>

      <div className="about-content">
        <h2>About Premier Medical</h2>

        <p>
          Premier Medical has proudly served our community for over 25 years,
          providing exceptional healthcare through compassionate professionals,
          advanced medical technology, and patient-centered care.
        </p>

        <p>
          From routine checkups to specialized treatments, our experienced team
          is committed to helping every patient achieve their best possible
          health.
        </p>

        <div className="about-stats">
          <div className="stat">
            <h3>25+</h3>
            <span>Years of Service</span>
          </div>

          <div className="stat">
            <h3>50+</h3>
            <span>Medical Specialists</span>
          </div>

          <div className="stat">
            <h3>15K+</h3>
            <span>Patients Treated</span>
          </div>

          <div className="stat">
            <h3>24/7</h3>
            <span>Emergency Care</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;