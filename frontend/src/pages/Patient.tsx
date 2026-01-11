import SideNavbar from "../components/SideNavbar";
import {
  HeartPulse,
  Droplet,
  Activity,
  Scale,
} from "lucide-react";
import "./Patient.css";

const Patient = () => {
  return (
    <div className="patient-layout">
      <SideNavbar />

      <div className="patient-content">
        <h3>Patient Dashboard</h3>
        <p className="subtitle">Current Health Status</p>

        <div className="vitals-grid">
          <div className="vital-card pulse">
            <HeartPulse className="icon red" />
            <p>Blood Pressure</p>
            <h4>120 / 80</h4>
          </div>

          <div className="vital-card">
            <Droplet className="icon blue" />
            <p>Sugar Level</p>
            <h4>98 mg/dL</h4>
          </div>

          <div className="vital-card">
            <Activity className="icon green" />
            <p>Heart Rate</p>
            <h4>72 bpm</h4>
          </div>

          <div className="vital-card">
            <Scale className="icon purple" />
            <p>BMI</p>
            <h4>22</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
