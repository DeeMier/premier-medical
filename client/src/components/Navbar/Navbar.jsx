import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MediConnect</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Doctors</li>
        <li>Contact</li>
      </ul>

      <div className="nav-buttons">
        <button className="patient-btn">Patient Login</button>
        <button className="doctor-btn">Doctor Login</button>
      </div>
    </nav>
  );
}

export default Navbar;