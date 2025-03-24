// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./About.css";

// const About = () => {

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
  
//   const doctors = [
//     { name: "Richa Fersk", specialization: "Gynecology", img: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", awards: "Excellence in Gynecology 2022", experience: "15+ Years" },
//     { name: "Jane Smith", specialization: "Neurologist", img: "https://images.pexels.com/photos/19438560/pexels-photo-19438560/free-photo-of-doctor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", awards: "Top Neurologist Award 2021", experience: "14+ Years" },
//     { name: "Emily Clark", specialization: "Orthopedic Surgeon", img: "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", awards: "Excellence in Orthopedics 2022", experience: "12+ Years" },
//     { name: "John Doe", specialization: "Cardiologist", img: "https://images.pexels.com/photos/4989135/pexels-photo-4989135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", awards: "Best Cardiologist Award 2020", experience: "10+ Years" },
//     { name: "Alice Gaurd", specialization: "Psychiatrist", img: "https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", awards: "Top Psychiatrist Award 2020", experience: "13+ Years" },
//     { name: "Wilion Darkus", specialization: "Pediatrics", img: "https://images.pexels.com/photos/5452225/pexels-photo-5452225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", awards: "Top Pediatrics Award 2021", experience: "10+ Years" },
//     {
//       name: "Sophia Lee", specialization: "Dermatologist", img: "https://images.pexels.com/photos/3768904/pexels-photo-3768904.jpeg?auto=compress&cs=tinysrgb&w=600", awards: "Excellence in Dermatology 2023",
//       experience: "8+ Years in Dermatology"
//     },
//     { 
//       "name": "Sophia Lee", 
//       "specialization": "Dermatologist", 
//       "img": "https://images.pexels.com/photos/3768904/pexels-photo-3768904.jpeg?auto=compress&cs=tinysrgb&w=600", 
//       "awards": "Excellence in Dermatology 2023",
//       "experience": "8+ Years in Dermatology"
//     },
//     { 
//       "name": "David Chen", 
//       "specialization": "Gastroenterologist", 
//       "img": "https://images.pexels.com/photos/5707727/pexels-photo-5707727.jpeg?auto=compress&cs=tinysrgb&w=600", 
//       "awards": "Best Gastroenterologist 2022",
//       "experience": "11+ Years in Gastroenterology"
//     },
//     { 
//       "name": "Ava Rodriguez", 
//       "specialization": "Ophthalmologist", 
//       "img": "https://images.pexels.com/photos/3993096/pexels-photo-3993096.jpeg?auto=compress&cs=tinysrgb&w=600", 
//       "awards": "Top Ophthalmologist 2021",
//       "experience": "16+ Years in Ophthalmology"
//     },
//     { 
//       "name": "Michael Brown", 
//       "specialization": "Urologist", 
//       "img": "https://images.pexels.com/photos/3993096/pexels-photo-3993096.jpeg?auto=compress&cs=tinysrgb&w=600", 
//       "awards": "Excellence in Urology 2020",
//       "experience": "9+ Years in Urology"
//     },
//     { 
//       "name": "Isabella Davis", 
//       "specialization": "Endocrinologist", 
//       "img": "https://images.pexels.com/photos/6148272/pexels-photo-6148272.jpeg?auto=compress&cs=tinysrgb&w=600", 
//       "awards": "Best Endocrinologist 2023",
//       "experience": "12+ Years in Endocrinology"
//     },
//     { 
//       "name": "Ethan Wilson", 
//       "specialization": "Pulmonologist", 
//       "img": "https://images.pexels.com/photos/6232924/pexels-photo-6232924.jpeg?auto=compress&cs=tinysrgb&w=600", 
//       "awards": "Top Pulmonologist 2022",
//       "experience": "14+ Years in Pulmonology"
//     },
//     { 
//       "name": "Mia Garcia", 
//       "specialization": "Rheumatologist", 
//       "img": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600", 
//       "awards": "Excellence in Rheumatology 2021",
//       "experience": "10+ Years in Rheumatology"
//     },
//     { 
//       "name": "Noah Anderson", 
//       "specialization": "Nephrologist", 
//       "img": "https://images.pexels.com/photos/3775564/pexels-photo-3775564.jpeg?auto=compress&cs=tinysrgb&w=600", 
//       "awards": "Best Nephrologist 2020",
//       "experience": "13+ Years in Nephrology"
//     },
//     { 
//       "name": "Charlotte Thomas", 
//       "specialization": "Hematologist", 
//       "img": "https://images.pexels.com/photos/3769123/pexels-photo-3769123.jpeg?auto=compress&cs=tinysrgb&w=600", 
//       "awards": "Top Hematologist 2023",
//       "experience": "8+ Years in Hematology"
//     },
//     { 
//       "name": "Liam Jackson", 
//       "specialization": "Oncologist", 
//       "img": "https://images.pexels.com/photos/3769025/pexels-photo-3769025.jpeg?auto=compress&cs=tinysrgb&w=600", 
//       "awards": "Excellence in Oncology 2022",
//       "experience": "11+ Years in Oncology"
//     },
//   ];

//   return (
//     <div className="about-container">
//       {/* Header Section */}
//       <header className="about-header">
//         <h1>Life Line Hospital</h1>
//         <p>Your Trusted Healthcare Partner</p>
//       </header>

//       {/* Facilities Section */}
//       <section className="about-section">
//         <h2>Our Facilities</h2>
//         <p>We provide state-of-the-art healthcare services for all your needs.</p>
//         <div className="facility-cards">
//           <div className="facility-card">
//             <h3>Emergency Care</h3>
//             <p>24/7 emergency services available for critical situations.</p>
//           </div>
//           <div className="facility-card">
//             <h3>ICU</h3>
//             <p>Advanced ICU facilities with skilled medical staff.</p>
//           </div>
//           <div className="facility-card">
//             <h3>Laboratory</h3>
//             <p>Modern diagnostic labs for accurate testing and reports.</p>
//           </div>
//         </div>
//       </section>

//       {/* Doctor's Information Section */}
//       <section className="about-section">
//         <h2>Meet Our Doctors</h2>
//         <div className="doctor-cards">
//           {doctors.map((doctor) => (
//             <Link to={`/doctor/${doctor.name}`} key={doctor.name} className="doctor-card">
//               <img src={doctor.img} alt={`Dr. ${doctor.name}`} className="doctor-image" />
//               <h3>{doctor.name}</h3>
//               <p><strong>Specialization:</strong> {doctor.specialization}</p>
//               <p><strong>Awards:</strong> {doctor.awards}</p>
//               <p><strong>Experience:</strong> {doctor.experience}</p>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;





import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const doctors = [
    { name: "Richa Fersk", specialization: "Gynecology", img: "https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=", awards: "Excellence in Gynecology 2022", experience: "15+ Years" },
    { name: "Jane Smith", specialization: "Neurologist", img: "https://images.pexels.com/photos/19438560/pexels-photo-19438560.jpeg", awards: "Top Neurologist Award 2021", experience: "14+ Years" },
    { name: "Emily Clark", specialization: "Orthopedic Surgeon", img: "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg", awards: "Excellence in Orthopedics 2022", experience: "12+ Years" },
    { name: "John Doe", specialization: "Cardiologist", img: "https://images.pexels.com/photos/4989135/pexels-photo-4989135.jpeg", awards: "Best Cardiologist Award 2020", experience: "10+ Years" },
    { name: "Alice Gaurd", specialization: "Psychiatrist", img: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg", awards: "Top Psychiatrist Award 2020", experience: "13+ Years" },
    { name: "Wilion Darkus", specialization: "Pediatrics", img: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg", awards: "Top Pediatrics Award 2021", experience: "10+ Years" },
    {
      name: "Sophia Lee", specialization: "Dermatologist", img: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg", awards: "Excellence in Dermatology 2023",
      experience: "8+ Years in Dermatology"
    },
    { 
      "name": "Johan Lee", 
      "specialization": "Dermatologist", 
      "img": "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*", 
      "awards": "Excellence in Dermatology 2023",
      "experience": "8+ Years in Dermatology"
    },
    { 
      "name": "David Chen", 
      "specialization": "Gastroenterologist", 
      "img": "https://nationaltoday.com/wp-content/uploads/2021/06/National-Call-Your-Doctor-Day-1200x834.jpg", 
      "awards": "Best Gastroenterologist 2022",
      "experience": "11+ Years in Gastroenterology"
    },
    { 
      "name": "Ava Rodriguez", 
      "specialization": "Ophthalmologist", 
      "img": "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip", 
      "awards": "Top Ophthalmologist 2021",
      "experience": "16+ Years in Ophthalmology"
    },
    { 
      "name": "Michael Brown", 
      "specialization": "Urologist", 
      "img": "https://thumbs.dreamstime.com/b/indian-doctor-mature-male-medical-standing-inside-hospital-handsome-model-portrait-43992356.jpg", 
      "awards": "Excellence in Urology 2020",
      "experience": "9+ Years in Urology"
    },
    { 
      "name": "Isabella Davis", 
      "specialization": "Endocrinologist", 
      "img": "https://images.pexels.com/photos/19131215/pexels-photo-19131215/free-photo-of-smiling-doctor-showing-thumb-up.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
      "awards": "Best Endocrinologist 2023",
      "experience": "12+ Years in Endocrinology"
    },
    { 
      "name": "Ethan Wilson", 
      "specialization": "Pulmonologist", 
      "img": "https://cdn.create.vista.com/api/media/small/283922720/stock-photo-handsome-doctor-stethoscope-standing-crossed-arms-looking-camera", 
      "awards": "Top Pulmonologist 2022",
      "experience": "14+ Years in Pulmonology"
    },
    { 
      "name": "Mia Garcia", 
      "specialization": "Rheumatologist", 
      "img": "https://img.freepik.com/premium-photo/portrait-beautiful-young-female-doctor-white-medical-jacket-isolated-white-background-brunette-woman-medic-crossed-hands-smiling-camera_533057-127.jpg?semt=ais_hybrid", 
      "awards": "Excellence in Rheumatology 2021",
      "experience": "10+ Years in Rheumatology"
    },
    { 
      "name": "Noah Anderson", 
      "specialization": "Nephrologist", 
      "img": "https://previews.123rf.com/images/stocking/stocking1304/stocking130400146/19094269-portrait-of-an-handsome-young-doctor.jpg", 
      "awards": "Best Nephrologist 2020",
      "experience": "13+ Years in Nephrology"
    },
    { 
      "name": "Charlotte Thomas", 
      "specialization": "Hematologist", 
      "img": "https://thumbs.dreamstime.com/b/african-male-doctor-happy-tablet-computer-34481166.jpg", 
      "awards": "Top Hematologist 2023",
      "experience": "8+ Years in Hematology"
    },
    { 
      "name": "Liam Jackson", 
      "specialization": "Oncologist", 
      "img": "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg", 
      "awards": "Excellence in Oncology 2022",
      "experience": "11+ Years in Oncology"
    },

  ];

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Life Line Hospital</h1>
        <p>Your Trusted Healthcare Partner</p>
      </header>

      {/* Facilities Section */}
      <section className="about-section">
        <h2>Our Facilities</h2>
        <p>We provide state-of-the-art healthcare services for all your needs.</p>
        <div className="facility-cards">
          <div className="facility-card">
            <h3>Emergency Care</h3>
            <p>24/7 emergency services available for critical situations.</p>
          </div>
          <div className="facility-card">
            <h3>ICU</h3>
            <p>Advanced ICU facilities with skilled medical staff.</p>
          </div>
          <div className="facility-card">
            <h3>Laboratory</h3>
            <p>Modern diagnostic labs for accurate testing and reports.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Meet Our Doctors</h2>
        <div className="doctor-cards">
          {doctors.map((doctor) => (
            <div 
              key={doctor.name} 
              className="doctor-card" 
              onClick={() => {
                navigate(`/doctor/${doctor.name}`);
                window.scrollTo(0, 0); // Scrolls to the top of the page
              }}
              style={{ cursor: "pointer" }}
            >
              <img src={doctor.img} alt={`Dr. ${doctor.name}`} className="doctor-image" />
              <h3>{doctor.name}</h3>
              <p><strong>Specialization:</strong> {doctor.specialization}</p>
              <p><strong>Awards:</strong> {doctor.awards}</p>
              <p><strong>Experience:</strong> {doctor.experience}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

