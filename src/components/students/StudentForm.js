import { useState } from "react";
import { useStudentData } from "../../context/StudentContext";

function StudentForm() {
  const { addStudent } = useStudentData();

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
  });

  const submit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.department) {
      alert("Please fill all fields");
      return;
    }

    addStudent(form);

    setForm({
      name: "",
      email: "",
      department: "",
    });
  };

  return (
    <div className="card">
      <h2>Add Student</h2>

      <form onSubmit={submit}>
        <input
          placeholder="Student Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <select
          value={form.department}
          onChange={(e) =>
            setForm({ ...form, department: e.target.value })
          }
        >
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="EEE">EEE</option>
          <option value="ECE">ECE</option>
          <option value="MECH">MECH</option>
        </select>

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;
