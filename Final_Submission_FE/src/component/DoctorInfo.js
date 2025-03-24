import { useParams, useNavigate } from "react-router-dom";
import "./DoctorInfo.css";

const DoctorInfo = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const doctorDetails = {
    "Richa Fersk": {
        img: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Gynecology",
        awards: "Excellence in Gynecology 2022",
        experience: "15+ Years in Gynecology",
        description: "Expert in women's health, maternity, and reproductive care.  Passionate about providing comprehensive care throughout all stages of a woman's life.",
    },
    "Jane Smith": {
        img: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Neurologist",
        awards: "Top Neurologist Award 2021",
        experience: "14+ Years in Neurology",
        description: "Specializes in brain and nervous system disorders.  Dedicated to diagnosing and treating complex neurological conditions.",
    },
    "Emily Clark": {
        img: "https://images.pexels.com/photos/8460155/pexels-photo-8460155.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Orthopedic Surgeon",
        awards: "Excellence in Orthopedics 2022",
        experience: "12+ Years in Orthopedics",
        description: "Expert in bone, joint, and muscle treatments.  Skilled in both surgical and non-surgical orthopedic interventions.",
    },
    "John Doe": {
        img: "https://images.pexels.com/photos/8376358/pexels-photo-8376358.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Cardiologist",
        awards: "Best Cardiologist Award 2020",
        experience: "10+ Years in Cardiology",
        description: "Heart care specialist with advanced diagnostics.  Focuses on preventative cardiology and interventional procedures.",
    },
    "Alice Gaurd": {
        img: "https://images.pexels.com/photos/7088485/pexels-photo-7088485.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Psychiatrist",
        awards: "Top Psychiatrist Award 2020",
        experience: "13+ Years in Psychiatry",
        description: "Mental health expert specializing in therapy and counseling.  Provides compassionate and personalized care for various mental health conditions.",
    },
    "Wilion Darkus": {
        img: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Pediatrics",
        awards: "Top Pediatrics Award 2021",
        experience: "10+ Years in Pediatrics",
        description: "Dedicated to children's health and well-being.  Provides comprehensive pediatric care from newborns to adolescents.",
    },





    "Sophia Lee": {
        img: "https://images.pexels.com/photos/3768904/pexels-photo-3768904.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Dermatologist",
        awards: "Excellence in Dermatology 2023",
        experience: "8+ Years in Dermatology",
        description: "Expert in skin, hair, and nail conditions. Offers a wide range of cosmetic and medical dermatology services."
    },
    "David Chen": {
        img: "https://images.pexels.com/photos/5707727/pexels-photo-5707727.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Gastroenterologist",
        awards: "Best Gastroenterologist 2022",
        experience: "11+ Years in Gastroenterology",
        description: "Specializes in digestive system disorders. Experienced in endoscopic procedures and management of gastrointestinal diseases."
    },
    "Ava Rodriguez": {
        img: "https://images.pexels.com/photos/3993096/pexels-photo-3993096.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Ophthalmologist",
        awards: "Top Ophthalmologist 2021",
        experience: "16+ Years in Ophthalmology",
        description: "Eye care specialist providing comprehensive eye exams, treatment of eye diseases, and vision correction."
    },
    "Michael Brown": {
        img: "https://images.pexels.com/photos/5473977/pexels-photo-5473977.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Urologist",
        awards: "Excellence in Urology 2020",
        experience: "9+ Years in Urology",
        description: "Specializes in the urinary system and male reproductive health. Offers advanced treatment options for urological conditions."
    },
    "Isabella Davis": {
        img: "https://images.pexels.com/photos/6148272/pexels-photo-6148272.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Endocrinologist",
        awards: "Best Endocrinologist 2023",
        experience: "12+ Years in Endocrinology",
        description: "Expert in hormonal disorders, including diabetes, thyroid conditions, and other endocrine imbalances."
    },
    "Ethan Wilson": {
        img: "https://images.pexels.com/photos/6232924/pexels-photo-6232924.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Pulmonologist",
        awards: "Top Pulmonologist 2022",
        experience: "14+ Years in Pulmonology",
        description: "Specializes in respiratory system diseases. Experienced in diagnosing and managing asthma, COPD, and other lung conditions."
    },
    "Mia Garcia": {
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Rheumatologist",
        awards: "Excellence in Rheumatology 2021",
        experience: "10+ Years in Rheumatology",
        description: "Expert in diagnosing and treating arthritis, autoimmune diseases, and other musculoskeletal conditions."
    },
    "Noah Anderson": {
        img: "https://images.pexels.com/photos/3775564/pexels-photo-3775564.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Nephrologist",
        awards: "Best Nephrologist 2020",
        experience: "13+ Years in Nephrology",
        description: "Specializes in kidney diseases and hypertension. Provides comprehensive care for patients with renal disorders."
    },
    "Charlotte Thomas": {
        img: "https://images.pexels.com/photos/3769123/pexels-photo-3769123.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Hematologist",
        awards: "Top Hematologist 2023",
        experience: "8+ Years in Hematology",
        description: "Expert in blood disorders, including anemia, leukemia, and other hematological malignancies."
    },
    "Liam Jackson": {
        img: "https://images.pexels.com/photos/3769025/pexels-photo-3769025.jpeg?auto=compress&cs=tinysrgb&w=600",
        specialization: "Oncologist",
        awards: "Excellence in Oncology 2022",
        experience: "11+ Years in Oncology",
        description: "Specializes in cancer treatment, including chemotherapy, radiation therapy, and other cancer-related therapies."
    },
    
  };

  const doctor = doctorDetails[name];

  if (!doctor) {
    return <p className="not-found">Doctor not found.</p>;
  }

  return (
    <div className="doctor-info-container">
      <img src={doctor.img} alt={name} className="doctor-image" />
      <h2>{name}</h2>
      <p><strong>Specialization:</strong> {doctor.specialization}</p>
      <p><strong>Awards:</strong> {doctor.awards}</p>
      <p><strong>Experience:</strong> {doctor.experience}</p>
      {/* <p><strong>Information:</strong> {doctor.para}</p> */}
      <p><strong>Information:</strong> {doctor.description}</p>
      <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default DoctorInfo;