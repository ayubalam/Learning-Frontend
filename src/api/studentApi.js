import API from "./api";

export const fetchStudents = () => API.get("/students");

export const createStudent = (data) =>
  API.post("/students", data);

export const deleteStudent = (id) =>
  API.delete(`/students/${id}`);
