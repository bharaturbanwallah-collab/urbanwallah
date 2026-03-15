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
        
        <div className="contact-image">
          <img src="/assets/help-desk.png" alt="Contact illustration" />
        </div>

        <div className="contact-content">
          <p>
            Collaborate with us — build enduring platforms and redefine the
            future of digital innovation.
          </p>
          
        </div>
      </div>


      {/* Info Blocks */}
      <div className="contact-info">
            
        {/* Address */}
       

        {/* Social */}
        <div className="info-block">
          <h4>🌐 Social</h4>
          <p>
            <a href="https://www.linkedin.com/company/104145392/admin/dashboard/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            |{" "}
            <a href="https://www.instagram.com/urbanwallah?igsh=MXZ4dTU3NWc1ZXBwMA==" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </p>
        </div>

        {/* Phone */}
        <div className="info-block">
          <h4>📞 Phone</h4>
          <p>+91 9567805030</p>
        </div>

        <div className="info-block">
          <h4>📍 Address</h4>
          <p>
          K-Cube Hive
          </p>
          <p>
          218, Sri Nagar, Villankurichi,
          </p>
          <p>
          Coimbatore, Tamil Nadu – 641035
          </p>
        </div>
      </div>
          
    </section>
  );
};

export default Contact;
