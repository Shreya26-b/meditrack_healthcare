import SideNavbar from "../components/SideNavbar";
import { FaTools, FaHeartbeat } from "react-icons/fa";
import "./Symptoms.css";

const SymptomTracker = () => {
  return (
    <div className="symptom-layout">
      {/* Left Navigation */}
      <SideNavbar />

      {/* Main Content */}
      <main className="symptom-content">
        <div className="construction-card">
          <div className="icon-wrapper">
            <FaHeartbeat className="health-icon" />
            <FaTools className="tool-icon" />
          </div>

          <h2>Symptom Tracker</h2>
          <p className="status-text">🚧 Under Construction</p>

          <p className="description">
            We’re building a smart symptom tracking experience that will help
            patients log symptoms, monitor patterns, and share insights with
            doctors seamlessly.
          </p>

          <p className="coming-soon">Coming soon. Stay tuned!</p>
        </div>
      </main>
    </div>
  );
};

export default SymptomTracker;
