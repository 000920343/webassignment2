// app/page.js

"use client";

import { useState } from "react";
import StudentList from "./components/StudentList";
import AddStudentForm from "./components/AddStudentForm";

export default function HomePage() {
  const [students, setStudents] = useState([
    { id: 1, firstName: "Shubhampreet", lastName: "Singh", dob: "2005-08-15", grade: "10" },
    { id: 2, firstName: "Jaskaran", lastName: "Singh Gill", dob: "2006-09-22", grade: "11" },
    { id: 3, firstName: "Manmohik", lastName: "Chahal", dob: "2007-05-05", grade: "9" },
    { id: 4, firstName: "Deepak", lastName: "Sharma", dob: "2005-11-18", grade: "10" },
    { id: 5, firstName: "Shubham", lastName: "Josan", dob: "2006-07-30", grade: "11" },
  ]);

  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
  };

  const removeStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div>
      <StudentList students={students} onRemoveStudent={removeStudent} />
      <AddStudentForm onAddStudent={addStudent} />
    </div>
  );
}
