import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:5000/api/students";

  
  const fetchStudents = async () => {
    try {
      const res = await axios.get(API_URL);
      setStudents(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Fetch students error:", err);
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async (student) => {
    try {
      const res = await axios.post(API_URL, student);

      setStudents((prev) =>
        Array.isArray(prev) ? [...prev, res.data] : [res.data]
      );
    } catch (err) {
      const message =
        err.response?.data?.message || "Failed to add student";
      alert(message);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      setStudents((prev) =>
        Array.isArray(prev) ? prev.filter((s) => s._id !== id) : []
      );
    } catch (err) {
      alert("Failed to delete student");
    }
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        loading,
        addStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentData = () => useContext(StudentContext);
