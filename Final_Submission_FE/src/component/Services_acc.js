import React, { useState } from "react";

const Services = () => {
  const servicesList = [
    { name: "General Medicine", description: "Comprehensive health care for all ages." },
    { name: "Emergency Care", description: "24/7 quick response for medical emergencies." },
    { name: "Pediatrics", description: "Child healthcare services from birth to adolescence." },
    { name: "Orthopedics", description: "Bone, joint, and muscle care treatments." },
    { name: "Cardiology", description: "Advanced heart care and diagnosis." },
    { name: "Radiology", description: "X-rays, MRIs, and other imaging services." },
    { name: "Physiotherapy", description: "Rehabilitation for better physical health." },
    { name: "Pharmacy", description: "In-house pharmacy for quick medication availability." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container my-5 p-5" style={{ background: "linear-gradient(to right, #eaf8ff, #d9f1ff)" }}>
      <h2 className="text-center text-2xl font-bold mb-4">Hospital Services</h2>
      <div className="w-full max-w-lg mx-auto">
        {servicesList.map((service, index) => (
          <div key={index} className="mb-2 border rounded-2xl shadow-lg overflow-hidden">
            <button
              className="w-full text-left px-4 py-3 bg-blue-500 text-white font-semibold focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {service.name}
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-white text-gray-700">{service.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
