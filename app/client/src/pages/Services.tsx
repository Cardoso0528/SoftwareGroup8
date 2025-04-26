import { useState } from 'react';
import '../styles/Services.css';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    {
      name: "Women's Haircut",
      description: "Custom haircut by our expert stylists",
      price: "$60",
      time: "1 hr",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Women's+Haircut"
    },
    {
      name: "Men's Haircut",
      description: "Custom haircut by our expert stylists",
      price: "$30",
      time: "30 mins",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Men's+Haircut"
    },
    {
      name: "Kid's Haircut",
      description: "Custom haircut by our expert stylists",
      price: "$25",
      time: "45 mins",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Kid's+Haircut"
    },
    {
      name: "Brazilian Blowout",
      description: "Expert hair coloring and highlights",
      price: "$200",
      time: "1 hr",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Brazilian+Blowout"
    },
    {
      name: "Blowout",
      description: "Expert hair coloring and highlights",
      price: "$45",
      time: "1 hr",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Blowout"
    },
    {
      name: "Formal Style",
      description: "Expert hair coloring and highlights",
      price: "$100",
      time: "1 hr 30 mins",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Formal+Style"
    },
    {
      name: "Silk Press Hair Styling",
      description: "Expert hair coloring and highlights",
      price: "$80",
      time: "1 hr 30 mins",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Silk+Press+Hair+Styling"
    },
    {
      name: "Styling Class",
      description: "Custom haircut by our expert stylists",
      price: "$100",
      time: "1 hr",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Styling+Class"
    },
    {
      name: "Balayage Hair Coloring",
      description: "Custom haircut by our expert stylists",
      price: "$200",
      time: "3 hrs 10 mins",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Balayage+Hair+Coloring"
    },
    {
      name: "Ombre Hair Coloring",
      description: "Custom haircut by our expert stylists",
      price: "$180",
      time: "2 hrs",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Haircut+Service"
    },
    {
      name: "All Over Color",
      description: "Custom haircut by our expert stylists",
      price: "$110",
      time: "3 hrs",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Haircut+Service"
    },
    {
      name: "Partial Highlights",
      description: "Custom haircut by our expert stylists",
      price: "$150",
      time: "2 hrs",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Partial+Highlights"
    },
    {
      name: "Signature Service",
      description: "Custom haircut by our expert stylists",
      price: "$350",
      time: "3 hrs 30 mins",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Haircut+Service"
    },
    {
      name: "Babylights",
      description: "Custom haircut by our expert stylists",
      price: "$250",
      time: "3 hrs",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Babylights"
    },
    {
      name: "Root Touch Up",
      description: "Custom haircut by our expert stylists",
      price: "$90",
      time: "2 hrs",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Balayage"
    },
    {
      name: "Men's Root Touch Up",
      description: "Custom haircut by our expert stylists",
      price: "$70",
      time: "1 hr 10 mins",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Men's+Root+Touch+Up"
    },
    {
      name: "Custom Hair Extension",
      description: "Custom haircut by our expert stylists",
      price: "$500",
      time: "2 hrs",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Full+Highlights"
    },
    {
      name: "Extension Maintenance",
      description: "Custom haircut by our expert stylists",
      price: "$100",
      time: "1 hr",
      image: "https://placehold.co/600x400/e2e8f01e293b?text=Haircut+Service"
    },
    {
      name: "Extension Removal",
      description: "Custom haircut by our expert stylists",
      price: "$85",
      time: "30 mins",
      image: "https://placehold.co/600x400/e2e8f01e293b?text=Haircut+Service"
    },
    {
      name: "Scalp Exfoliation",
      description: "Custom haircut by our expert stylists",
      price: "$15",
      time: "10 mins",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Haircut+Service"
    },
    {
      name: "Hair Gloss Treatment",
      description: "Custom haircut by our expert stylists",
      price: "$70",
      time: "45 mins",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Haircut+Service"
    },
    {
      name: "Hair Chalking",
      description: "Custom haircut by our expert stylists",
      price: "$55",
      time: "1 hr",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Haircut+Service"
    },
    {
      name: "Hair Glazing Treatment",
      description: "Custom haircut by our expert stylists",
      price: "$65",
      time: "45 mins",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Haircut+Service"
    },
    {
      name: "Keratin Treatment",
      description: "Custom haircut by our expert stylists",
      price: "$200",
      time: "3 hrs",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Haircut+Service"
    },
    {
      name: "Aromatherapy Scalp Treatment",
      description: "Custom haircut by our expert stylists",
      price: "$30",
      time: "30 mins",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Haircut+Service"
    }
  ];

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="service-grid">
        {filteredServices.map((service, index) => (
          <div key={index} className="service-card">
            <img 
              src={service.image}
              alt={service.name}
              className="service-image" 
            />
            <h2 className="service-name">{service.name}</h2>
            <p className="service-description">{service.description}</p>
            <div className="service-details">
              <p className="service-price">{service.price}</p>
              <p className="service-time">{service.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;