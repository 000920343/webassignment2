
// app/components/StudentList.js

import Image from 'next/image';

export default function StudentList({ students, onRemoveStudent }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>
        <Image src="/th.jpg" alt="Icon" width={24} height={24} /> 
        Student List
        <Image src="/th.jpg" alt="Icon" width={24} height={24} /> 
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>First Name</th>
            <th style={tableHeaderStyle}>Last Name</th>
            <th style={tableHeaderStyle}>Date of Birth</th>
            <th style={tableHeaderStyle}>Grade</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} style={index % 2 === 0 ? tableRowEvenStyle : tableRowOddStyle}>
              <td style={tableCellStyle}>{student.firstName}</td>
              <td style={tableCellStyle}>{student.lastName}</td>
              <td style={tableCellStyle}>{student.dob}</td>
              <td style={tableCellStyle}>{student.grade}</td>
              <td style={tableCellStyle}>
                <button style={removeButtonStyle} onClick={() => onRemoveStudent(student.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Style definitions (same as before)

  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1.5rem",
    marginBottom: "2rem",
  };
  
  const titleStyle = {
    marginBottom: "1rem",
    fontWeight: "bold",
    fontSize: "1.8rem",
    color: "#000080",
    textDecoration: "underline",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };
  
  const iconStyle = {
    width: "50px", 
    height: "50px", 
  };
  
  const tableStyle = {
    width: "80%",
    maxWidth: "600px",
    borderCollapse: "collapse",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "1rem",
  };
  
  const tableHeaderStyle = {
    padding: "0.75rem",
    backgroundColor: "#000080",
    color: "#fff",
    fontWeight: "bold",
  };
  
  const tableRowEvenStyle = {
    backgroundColor: "#f9f9f9",
  };
  
  const tableRowOddStyle = {
    backgroundColor: "#fff",
  };
  
  const tableCellStyle = {
    padding: "0.75rem",
    borderBottom: "1px solid #e0e0e0",
    color: "#333",
  };
  
  const removeButtonStyle = {
    padding: "0.25rem 0.5rem",
    backgroundColor: "#000080",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
  };
  