import { useStudentData } from "../context/StudentContext";

function DashboardPage() {
  const { students = [], activities = [] } = useStudentData();

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h2>Total Students</h2>
          <p>{students.length}</p>
        </div>

        <div className="dashboard-card">
          <h2>Total Activities</h2>
          <p>{activities.length}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
