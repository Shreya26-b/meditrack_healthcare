import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SideNavbar from "../components/SideNavbar";
import "./Doctor.css";

const patientsData = [
  {
    id: 1,
    name: "Pheobe",
    number: "2984539",
    gender: "F",
    age: 31,
    reportTime: "10 Jan 2026",
    status: "To be confirmed",
  },
  {
    id: 2,
    name: "Ross",
    number: "4567890",
    gender: "M",
    age: 34,
    reportTime: "11 Jan 2026",
    status: "Booked",
  },
];

const Doctor = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = patientsData.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  return (
    <div className="doctor-layout">
      <SideNavbar />

      <div className="doctor-content">
        <h3>Hi Doctor 👋</h3>
        <p>Here's your list of patients</p>

        <table className="patient-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Report Time</th>
              <th>Status</th>
              <th>Appointment</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((patient) => (
              <tr
                key={patient.id}
                onClick={() => navigate(`/patient`)}
                className="table-row"
              >
                <td>{patient.name}</td>
                <td>{patient.number}</td>
                <td>{patient.gender}</td>
                <td>{patient.age}</td>
                <td>{patient.reportTime}</td>
                <td>{patient.status}</td>
                <td className="action-cell">Confirm / Cancel</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <span>Page {page}</span>
          <button
            disabled={startIndex + rowsPerPage >= patientsData.length}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
