import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import StudentsPage from "./pages/StudentsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import StudentActivityPage from "./pages/StudentActivityPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import AboutPage from "./pages/AboutPage";




function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/student/:name" element={<StudentActivityPage />} />
        <Route path="/about" element={<AboutPage />} />
       

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
