import "./Services.css";

function Services() {
  return (
    <div className="services">
      <div className="services-hero">
        <h1>Our Services</h1>

        <p>
          We provide simple and effective digital solutions
          to help your business grow.
        </p>

        <div className="service-cards">
          <div className="service-card">
            <h2>Web Development</h2>
            <p>
              We build modern and responsive websites for your business.
            </p>
          </div>

          <div className="service-card">
            <h2>UI/UX Design</h2>
            <p>
              We create clean and user-friendly designs.
            </p>
          </div>

          <div className="service-card">
            <h2>Digital Marketing</h2>
            <p>
              We help your business reach more customers online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;