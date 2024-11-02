import Image from 'next/image';
import { useState } from "react";

export default function AddStudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    grade: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.dob && formData.grade) {
      onAddStudent(formData);
      setFormData({ firstName: "", lastName: "", dob: "", grade: "" });
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={formTitleStyle}>
      <Image src="/th.jpg" alt="Icon" width={24} height={24} /> {/* Image at the start */}
        Add New Student
        <Image src="/th.jpg" alt="Icon" width={24} height={24} /> {/* Image at the end */}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="dob"
          type="date"
          placeholder="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
          style={inputStyle}
        />
        <select
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          style={selectStyle}
        >
          <option value="" disabled>Select Grade</option>
          <option value="9">9th Grade</option>
          <option value="10">10th Grade</option>
          <option value="11">11th Grade</option>
          <option value="12">12th Grade</option>
        </select>
        <button type="submit" style={buttonStyle}>Add Student</button>
      </form>

      {showPopup && (
        <div style={popupStyle}>
          New student has been successfully added!
        </div>
      )}
    </div>
  );
}

// Styles
const formContainerStyle = {
  padding: "1.5rem",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "2rem",
};

const formTitleStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#000080",
  textAlign: "center",
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
};

const iconStyle = {
  width: "24px",
  height: "24px",
};

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  marginBottom: "0.75rem",
  borderRadius: "4px",
  border: "1px solid #000",
  fontSize: "1rem",
  color: "#333",
  backgroundColor: "#fff",
};

const selectStyle = {
  width: "100%",
  padding: "0.5rem",
  marginBottom: "0.75rem",
  borderRadius: "4px",
  border: "1px solid #000",
  fontSize: "1rem",
  color: "#333",
  backgroundColor: "#fff",
};

const buttonStyle = {
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#000080",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "1rem",
  cursor: "pointer",
};

const popupStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  color: "#000",
  padding: "1rem 2rem",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  zIndex: 1000,
  textAlign: "center",
  fontWeight: "bold",
};
