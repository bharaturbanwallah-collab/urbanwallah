import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Left Content */}
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>
            Collaborate with us — build enduring platforms and redefine the
            future of digital innovation.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Tell us about your idea"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="reach-out">
              Reach Out
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="contact-image">
          <img src="/assets/help-desk.png" alt="Contact illustration" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
