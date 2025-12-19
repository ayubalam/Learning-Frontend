import { useState } from "react";
import StudentForm from "../components/students/StudentForm";
import StudentList from "../components/students/StudentList";
import StudentFilter from "../components/students/StudentFilter";

function StudentsPage() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("");

  return (
    <div className="students-page">
      <h1>Manage Students</h1>

      <StudentFilter
        search={search}
        setSearch={setSearch}
        dept={dept}
        setDept={setDept}
      />

      <div className="student-grid">
        <StudentForm />
        <StudentList search={search} dept={dept} />
      </div>
    </div>
  );
}

export default StudentsPage;
