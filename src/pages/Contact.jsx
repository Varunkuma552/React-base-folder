import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <section className="contact-section">
        <div className="contact-info">
          <h1>Contact Us</h1>

          <p>
            Have a question or want to work with us?
            Send us a message and we'll get back to you.
          </p>

          <div className="contact-details">
            <p>Email: hello@example.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Hyderabad, India</p>
          </div>
        </div>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;