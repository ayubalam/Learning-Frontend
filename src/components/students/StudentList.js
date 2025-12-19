import { useStudentData } from "../../context/StudentContext";

function StudentList() {
  const { students, loading, deleteStudent } = useStudentData();

  if (loading) {
    return <p>Loading students...</p>;
  }

  if (!Array.isArray(students)) {
    return <p>Invalid student data</p>;
  }

  if (students.length === 0) {
    return <p>No students found.</p>;
  }

  return (
    <div className="card">
      <h2>Student List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.department}</td>
              <td>
                <button
                  className="danger-btn"
                  onClick={() => deleteStudent(s._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
