import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";
import Appointment from "./components/Appointment";
import Analytics from "./components/Analytics";
import Symptoms from "./components/Symptoms";
import Chatbot from "./components/Chatbot";
import ProtectedRoute from "./routes/ProtectedRoute";

/* 🔹 Handles Chrome back arrow behavior */
const BackNavigationHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handlePopState = () => {
      const user = JSON.parse(localStorage.getItem("user") || "null");
      const path = location.pathname;

      if (!user) {
        navigate("/", { replace: true });
        return;
      }

      // If on dashboard → go to home
      if (path === "/doctor" || path === "/patient") {
        navigate("/", { replace: true });
        return;
      }

      // From inner pages → go to dashboard
      if (user.role === "doctor") {
        navigate("/doctor", { replace: true });
      } else {
        navigate("/patient", { replace: true });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigate, location.pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* 🔥 Intercepts browser back arrow */}
      <BackNavigationHandler />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

        {/* Doctor protected */}
        <Route
          path="/doctor"
          element={
            <ProtectedRoute role="doctor">
              <Doctor />
            </ProtectedRoute>
          }
        />

        {/* Patient protected */}
        {/* <Route
          path="/patient"
          element={
            <ProtectedRoute role="patient">
              <Patient />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/patient" element={<Patient />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
