import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <section className="about-section">
        <div className="about-content">
          <h1>About Us</h1>

          <p>
            We are a passionate team focused on creating simple,
            modern and effective digital experiences.
          </p>

          <p>
            Our goal is to help businesses grow by using technology,
            creativity and thoughtful design.
          </p>

          <button>Learn More</button>
        </div>

        <div className="about-image">
          <div>Our Team</div>
        </div>
      </section>
    </div>
  );
}

export default About;