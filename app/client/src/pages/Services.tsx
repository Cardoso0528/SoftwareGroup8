import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="service-grid">
        <div className="service-card">
          <img src="images/service1.jpg" alt="Service 1" className="service-image" />
          <h2 className="service-name">Haircut</h2>
          <p className="service-description">Custom haircut by our expert stylists</p>
        </div>
      </div>
    </div>
  );
};

export default Services;