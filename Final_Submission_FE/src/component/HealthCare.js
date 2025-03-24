import React from 'react';
import './HealthCare.css';
import { FaStethoscope, FaBaby, FaHeartbeat, FaBrain, FaUserMd } from 'react-icons/fa';

const HealthCare = () => {
  const services = [
    { icon: <FaStethoscope />, title: 'Emergency Department', description: 'Immediate medical care for critical conditions.' },
    { icon: <FaBaby />, title: 'Pediatric Department', description: 'Specialized care for children and infants.' },
    { icon: <FaUserMd />, title: 'General Physician', description: 'Routine medical checkups and treatments.' },
    { icon: <FaBrain />, title: 'Neurology Department', description: 'Expert care for brain and nervous system issues.' },
    { icon: <FaHeartbeat />, title: 'Cardiology Department', description: 'Advanced care for heart conditions.' }
  ];

  return (
    <div className="healthcare-section">
      <h2 className="healthcare-title">Our Healthcare Services</h2>
      <p className="healthcare-subtitle">We provide a range of top-quality medical services to meet your health needs.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthCare;
