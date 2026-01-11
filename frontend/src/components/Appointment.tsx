import { useState, type FormEvent} from "react";
import SideNavbar from "../components/SideNavbar";
import "./Appointment.css";

const Appointment = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPopup(true);
  };
  return (
    <div className="appointment-layout">
      <SideNavbar />

      <div className="appointment-content">
        <form className="appointment-form" onSubmit={handleSubmit}>
          <h3>Book an Appointment</h3>

          {/* Issue */}
          <div className="form-group">
            <label>Issue</label>
            <select required>
              <option value="">Select issue</option>
              <option value="fever">Fever</option>
              <option value="diabetes">Diabetes</option>
              <option value="heart">Heart Related</option>
              <option value="general">General Checkup</option>
            </select>
          </div>

          {/* Doctor */}
          <div className="form-group">
            <label>Doctor</label>
            <select required>
              <option value="">Select doctor</option>
              <option value="dr-smith">Dr. Smith</option>
              <option value="dr-john">Dr. John</option>
              <option value="dr-emily">Dr. Emily</option>
            </select>
          </div>

          {/* Date */}
          <div className="form-group">
            <label>Date</label>
            <input type="date" required />
          </div>

          {/* Time Slot */}
          <div className="form-group">
            <label>Time Slot</label>
            <select required>
              <option value="">Select slot</option>
              <option>09:00 AM</option>
              <option>09:30 AM</option>
              <option>10:00 AM</option>
              <option>10:30 AM</option>
              <option>11:00 AM</option>
              <option>11:30 AM</option>
              <option>12:00 PM</option>
            </select>
          </div>

          <button type="submit" className="appointment-button">
            Book Appointment
          </button>

          {/* <p className="appointment-status">
            Appointment Status: <span>Pending</span>
          </p> */}
        </form>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>✅ Appointment Scheduled</h3>
            <p>Your appointment has been scheduled successfully.</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
