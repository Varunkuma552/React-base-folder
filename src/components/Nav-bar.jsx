import "./nav-bar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>MyWebsite</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;