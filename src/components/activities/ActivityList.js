import { useState } from "react";
import { useStudentData } from "../../context/StudentContext";

function ActivityList({ onEdit }) {
  const { activities = [], deleteActivity } = useStudentData();

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");

  const filteredActivities = activities.filter((a) => {
    const matchSearch =
      a.title?.toLowerCase().includes(search.toLowerCase()) ||
      a.student?.toLowerCase().includes(search.toLowerCase());

    const matchDept =
      department === "" || a.department === department;

    return matchSearch && matchDept;
  });

  return (
    <div className="card">
      <h2>Activity List</h2>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by activity or student"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">All Departments</option>
          <option value="CSE">CSE</option>
          <option value="EEE">EEE</option>
          <option value="ECE">ECE</option>
          <option value="MECH">MECH</option>
        </select>
      </div>

      {filteredActivities.length === 0 ? (
        <p>No activities found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Department</th>
              <th>Student</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredActivities.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.title}</td>
                <td>{activity.department}</td>
                <td>{activity.student}</td>
                <td>{activity.phone}</td>
                <td>{activity.date}</td>
                <td>{activity.category}</td>
                <td>{activity.status}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => onEdit(activity)}
                  >
                    Edit
                  </button>

                  <button
                    className="danger-btn"
                    onClick={() => deleteActivity(activity.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ActivityList;
