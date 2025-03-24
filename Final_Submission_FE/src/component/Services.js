import React from "react";
import "./Services.css"
const Services = () => {
  const servicesList = [
    {
      name: "General Medicine",
      description: "Comprehensive health care for all ages.",
      image: "https://img.freepik.com/premium-photo/medicine-tablets-capsules-hd-image_1012565-77387.jpg",
     
    },
    {
      name: "Emergency Care",
      description: "24/7 quick response for medical emergencies.",
      image: "https://media.licdn.com/dms/image/D5612AQEQyZHSr93LMg/article-cover_image-shrink_720_1280/0/1715926534868?e=2147483647&v=beta&t=pdpmSJ1IWQdM5eryRnz0BwSKrWITuET6UrEMVKxndUA",
    },
    {
      name: "Pediatrics",
      description: "Child healthcare services from birth to adolescence.",
      image: "https://plus.unsplash.com/premium_photo-1666299880508-bffece864e96?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVkaWF0cmljfGVufDB8fDB8fHww",
    },
    {
      name: "Orthopedics",
      description: "Bone, joint, and muscle care treatments.",
      image: "https://www.almedica.in/wp-content/uploads/2021/10/33-339640_orthopedic.jpg",
    },
    {
      name: "Cardiology",
      description: "Advanced heart care and diagnosis.",
      image: "https://img.freepik.com/premium-photo/cardiovascular-disease-cvd-asian-doctor-holding-human-anatomy-model-learn-treat-heart-disease_39768-14456.jpg",
    },
    {
      name: "Radiology",
      description: "X-rays, MRIs, and other imaging services.",
      image: "https://plus.unsplash.com/premium_photo-1663040458518-bb83a6afa6a4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFkaW9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Physiotherapy",
      description: "Rehabilitation for better physical health.",
      image: "https://plus.unsplash.com/premium_photo-1663012948067-0478e4f9d9c6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Pharmacy",
      description: "In-house pharmacy for quick medication availability.",
      image: "https://plus.unsplash.com/premium_photo-1661766456250-bbde7dd079de?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhhcm1hY3l8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <div className="container my-5" style={{  top:"50px" }}>
    
      <h1 className="text-center mb-4" >Our Services</h1>
      <div
        id="servicesCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {servicesList.map((service, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={service.image}
                className="d-block w-100 img-fluid"
                alt={service.name}
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />

              
              <div className="carousel-caption d-none d-md-block" >
                <h3 style={{color:"black",fontSize:"30px"}}>{service.name}</h3>
                <h4 style={{color:"black",fontSize:"20px"}}>{service.description}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#servicesCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#servicesCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Services;
