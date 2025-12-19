function StudentFilter({ search, setSearch, dept, setDept }) {
  return (
    <div className="card">
      <h2>Filter Students</h2>

      <input
        placeholder="Search by student name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={dept} onChange={(e) => setDept(e.target.value)}>
        <option value="">All Departments</option>
        <option value="CSE">CSE</option>
        <option value="EEE">EEE</option>
        <option value="ECE">ECE</option>
        <option value="MECH">MECH</option>
      </select>
    </div>
  );
}

export default StudentFilter;
