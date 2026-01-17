import { useEffect, useState, type FormEvent } from "react";
import SideNavbar from "../components/SideNavbar";
import "./Appointment.css";

interface User {
  name: string;
  role: string;
}

interface Appointment {
  id: number;                // ✅ THIS WAS MISSING
  issue: string;
  doctorName: string;
  patientName: string;
  date: string;
  time: string;
  status: string;
}


const Appointment = () => {
  const [doctors, setDoctors] = useState<User[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const [issue, setIssue] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(
      localStorage.getItem("appointments") || "[]"
    );

    const currentUser = JSON.parse(localStorage.getItem("user") || "{}");

    // show only logged-in patient's appointments
    const filtered = storedAppointments.filter(
      (a: any) => a.patientName === currentUser.name
    );

    setAppointments(filtered);
  }, [showPopup]);

  // 🔹 Load doctors from localStorage
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const doctorList = users.filter((u: User) => u.role === "doctor");
    setDoctors(doctorList);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // 🔹 Date validation
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(date);

    if (selectedDate < today) {
      setError("Please select a valid future date");
      return;
    }

    const patient = JSON.parse(localStorage.getItem("user") || "{}");

    const newAppointment = {
  id: Date.now(), // ✅ unique ID
  issue,
  doctorName: doctor,
  patientName: patient.name,
  date,
  time,
  status: "Confirmation Pending",
};


    const existingAppointments = JSON.parse(
      localStorage.getItem("appointments") || "[]"
    );

    localStorage.setItem(
      "appointments",
      JSON.stringify([...existingAppointments, newAppointment])
    );

    setShowPopup(true);
  };

  return (
    <div className="appointment-layout">
  <SideNavbar />

  <div className="appointment-content">
    {/* FORM */}
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h3>Book an Appointment</h3>

      {error && <p className="form-error">{error}</p>}

      {/* Issue */}
      <div className="form-group">
        <label>Issue</label>
        <select value={issue} onChange={(e) => setIssue(e.target.value)} required>
          <option value="">Select issue</option>
          <option value="Fever">Fever</option>
          <option value="Diabetes">Diabetes</option>
          <option value="Heart">Heart Related</option>
          <option value="General">General Checkup</option>
        </select>
      </div>

      {/* Doctor */}
      <div className="form-group">
        <label>Doctor</label>
        <select
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          required
        >
          <option value="">Select doctor</option>
          {doctors.map((doc, index) => (
            <option key={index} value={doc.name}>
              {doc.name}
            </option>
          ))}
        </select>
      </div>

      {/* Date */}
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      {/* Time */}
      <div className="form-group">
        <label>Time Slot</label>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select slot</option>
          <option>09:00 AM</option>
          <option>09:30 AM</option>
          <option>10:00 AM</option>
          <option>10:30 AM</option>
          <option>11:00 AM</option>
          <option>11:30 AM</option>
        </select>
      </div>

      <button type="submit" className="appointment-button">
        Book Appointment
      </button>
    </form>

    {/* 🔽 TABLE BELOW FORM */}
    <div className="appointment-table-wrapper">
      <h3 className="table-title">Your Appointments</h3>

      {appointments.length === 0 ? (
        <p className="no-appointments">No appointments scheduled</p>
      ) : (
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Issue</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, index) => (
              <tr key={index}>
                <td className="table-data">{appt.issue}</td>
                <td className="table-data">{appt.date}</td>
                <td className="table-data">{appt.time}</td>
                <td className="status-cell">{appt.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>

  {showPopup && (
    <div className="popup-overlay">
      <div className="popup-box">
        <h3>✅ Appointment Scheduled</h3>
        <p>Status: Confirmation Pending</p>
        <button onClick={() => setShowPopup(false)}>OK</button>
      </div>
    </div>
  )}
</div>

  );
};

export default Appointment;
