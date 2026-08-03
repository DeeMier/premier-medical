import React from "react";
import "./Services.css";

const services = [
  {
    title: "Primary Care",
    description:
      "Comprehensive healthcare services including routine checkups, preventative care, and ongoing health management.",
    icon: "🩺",
  },
  {
    title: "Cardiology",
    description:
      "Advanced heart care services focused on diagnosis, treatment, and prevention of cardiovascular conditions.",
    icon: "❤️",
  },
  {
    title: "Laboratory Services",
    description:
      "Convenient testing services with fast and reliable results managed through your patient portal.",
    icon: "🧪",
  },
  {
    title: "Emergency Care",
    description:
      "24/7 emergency services providing immediate care when you need it most.",
    icon: "🚑",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">

        <div className="services-header">
          <h2>Our Medical Services</h2>
          <p>
            Providing quality healthcare solutions designed around our patients.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;