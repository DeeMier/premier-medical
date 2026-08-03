import "./Hero.css";
function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Compassionate Care.
          <br />
          Advanced Medicine.
        </h1>

        <p>
          Premier Medical provides trusted healthcare services
          with experienced doctors and modern technology.
        </p>

        <div className="hero-buttons">

          <button>
            Book Appointment
          </button>

          <button>
            Patient Login
          </button>

        </div>

      </div>


      <div className="hero-image">

        <div className="hospital-placeholder">
          🏥
        </div>

      </div>


    </section>
  );
}

export default Hero;