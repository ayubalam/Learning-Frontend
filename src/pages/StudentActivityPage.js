import { useParams } from "react-router-dom";
import { useStudentData } from "../context/StudentContext";

function StudentActivityPage() {
  const { activities } = useStudentData();
  const { studentName } = useParams();

  const studentActivities = activities.filter((a) =>
    a.participants?.includes(studentName)
  );

  return (
    <div className="students-page">
      <h1 className="page-title">Activities of {studentName}</h1>

      {studentActivities.length === 0 ? (
        <p>No activities found for this student.</p>
      ) : (
        <table className="activity-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Category</th>
              <th>Department</th>
              <th>Status</th>
              <th>Remarks</th>
            </tr>
          </thead>

          <tbody>
            {studentActivities.map((a) => (
              <tr key={a.id}>
                <td>{a.title}</td>
                <td>{a.date}</td>
                <td>{a.category}</td>
                <td>{a.department}</td>
                <td>{a.status}</td>
                <td>{a.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentActivityPage;
