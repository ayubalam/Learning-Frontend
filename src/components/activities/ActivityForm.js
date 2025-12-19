import { useEffect, useState } from "react";
import { useStudentData } from "../../context/StudentContext";

function ActivityForm({ editActivity, clearEdit }) {
  const { students = [], addActivity, updateActivity } = useStudentData();

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    phone: "",
    date: "",
    category: "",
    department: "",
    student: "",
    status: "Upcoming",
  });

  useEffect(() => {
    if (editActivity) {
      setFormData(editActivity);
    }
  }, [editActivity]);

  const filteredStudents = students.filter(
    (s) => s.department === formData.department
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.department || !formData.student) {
      alert("Please fill required fields");
      return;
    }

    if (editActivity) {
      updateActivity(formData);
      clearEdit();
    } else {
      addActivity({
        ...formData,
        id: Date.now(),
      });
    }

    setFormData({
      id: null,
      title: "",
      phone: "",
      date: "",
      category: "",
      department: "",
      student: "",
      status: "Upcoming",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="activity-form">
      <h2>{editActivity ? "Edit Activity" : "Add Activity"}</h2>

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="">Select Category</option>
        <option>Workshop</option>
        <option>Sports</option>
        <option>Seminar</option>
        <option>Cultural</option>
      </select>

      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
      >
        <option value="">Select Department</option>
        <option>CSE</option>
        <option>EEE</option>
        <option>ECE</option>
        <option>MECH</option>
      </select>

      <select
        name="student"
        value={formData.student}
        onChange={handleChange}
        disabled={!formData.department}
      >
        <option value="">Select Student</option>
        {filteredStudents.length === 0 ? (
          <option disabled>No students found</option>
        ) : (
          filteredStudents.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))
        )}
      </select>

      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Upcoming">Upcoming</option>
        <option value="Completed">Completed</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      <button type="submit" className="primary-btn">
        {editActivity ? "Update Activity" : "Add Activity"}
      </button>
    </form>
  );
}

export default ActivityForm;
