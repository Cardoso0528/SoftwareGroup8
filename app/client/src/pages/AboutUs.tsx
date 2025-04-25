import React, { useState } from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  // Replace with your actual salon address
  const salonAddress = {
    street: "2770 Virginia Pkwy",
    city: "Mckinney",
    state: "TX",
    zip: "75071",
    phone: "(972) 768-8572",
    email: "info@galaxyofsalons.com"
  };

  // Format the full address for display
  const fullAddress = `${salonAddress.street}, ${salonAddress.city}, ${salonAddress.state} ${salonAddress.zip}`;
  
  // Format the address for the Google Maps embed URL
  const mapAddress = encodeURIComponent(fullAddress);

  // State for the contact form
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="about-container">
      <div className="address-section">
        <h1 className="about-title">Visit Us</h1>
        <div className="address-card">
          <div className="address-details">
            <h2 className="address-title">Galaxy of Salons</h2>
            <p className="address-line">{salonAddress.street}</p>
            <p className="address-line">{salonAddress.city}, {salonAddress.state} {salonAddress.zip}</p>
            <div className="contact-info">
              <p className="contact-line">Phone: {salonAddress.phone}</p>
              <p className="contact-line">Email: {salonAddress.email}</p>
            </div>
            <div className="business-hours">
              <h3 className="hours-title">Business Hours</h3>
              <p className="hours-line">Monday - Friday: 9:00 AM - 8:00 PM</p>
              <p className="hours-line">Saturday: 10:00 AM - 6:00 PM</p>
              <p className="hours-line">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="map-section">
        <h2 className="map-title">Find Us</h2>
        <div className="map-container">
          <img 
            src="https://maps.googleapis.com/maps/api/staticmap?center=San+Francisco,CA&zoom=14&size=600x450&maptype=roadmap&markers=color:red%7C37.7749,-122.4194&key=YOUR_API_KEY" 
            alt="Salon Location Map"
            className="map-image"
          />
        </div>
      </div>

      <div className="about-content">
        <h2 className="about-subtitle">Our Story</h2>
        <p className="about-text">
          insert about us text here
        </p>
      </div>

      <div className="contact-form-section">
        <h2 className="contact-form-title">Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default AboutUs; 