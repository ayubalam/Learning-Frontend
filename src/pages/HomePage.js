import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      
      <section className="home-hero">
        <h1 className="home-title">Student Activity Management System</h1>
        <p className="home-tagline">
          Simplifying student participation and activity management
        </p>

        <p className="home-description">
          The Student Activity Management System is a centralized web-based platform
          designed for educational institutions to manage students and their
          participation in academic and extracurricular activities. It helps
          administrators organize activities, assign students, and track records
          efficiently.
        </p>

        <button className="home-cta" onClick={() => navigate("/dashboard")}>
          Get Started
        </button>
      </section>

      
      <section className="home-section">
        <h2 className="home-section-title">Key Features</h2>

        <div className="home-features">
          <div className="feature-card">
            <h3>Student Management</h3>
            <p>Register and manage students with department-wise organization.</p>
          </div>

          <div className="feature-card">
            <h3>Activity Assignment</h3>
            <p>Assign activities to specific students based on departments.</p>
          </div>

          <div className="feature-card">
            <h3>Search & Filters</h3>
            <p>Quickly find students and activities using advanced filters.</p>
          </div>

          <div className="feature-card">
            <h3>Centralized Records</h3>
            <p>Maintain structured and accurate digital records.</p>
          </div>
        </div>
      </section>

     
      <section className="home-section">
        <h2 className="home-section-title">Who Is This For?</h2>
        <ul className="home-list">
          <li>College and University Administrators</li>
          <li>Faculty Coordinators</li>
          <li>Training Institutes</li>
          <li>Educational Management Teams</li>
        </ul>
      </section>

     
      <section className="home-section">
        <h2 className="home-section-title">How to Get Started</h2>
        <ol className="home-list">
          <li>Login to the system using administrator credentials.</li>
          <li>Register students in the Students section.</li>
          <li>Create activities and assign them to students.</li>
          <li>Use search and department filters to manage records.</li>
        </ol>
      </section>

      
      <section className="home-footer">
        <p>
          Ready to manage student activities efficiently?
        </p>
        <button className="home-cta secondary" onClick={() => navigate("/students")}>
          Manage Students
        </button>
      </section>
    </div>
  );
}

export default HomePage;
