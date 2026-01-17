import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import "./Doctor.css";

interface Appointment {
  doctorName: string;
  patientName: string;
  issue: string;
  date: string;
  time: string;
  status: string;
}

const Doctor = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const doctor = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    const storedAppointments: Appointment[] = JSON.parse(
      localStorage.getItem("appointments") || "[]"
    );

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const updatedAppointments = storedAppointments.map((appt) => {
      const apptDate = new Date(appt.date);
      if (apptDate < today && appt.status !== "Completed") {
        return { ...appt, status: "Completed" };
      }
      return appt;
    });

    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    const myAppointments = updatedAppointments.filter(
      (appt) => appt.doctorName === doctor.name
    );

    setAppointments(myAppointments);
  }, [doctor.name]);

  const updateStatus = (appointmentId: number, newStatus: string) => {
    const allAppointments = JSON.parse(
      localStorage.getItem("appointments") || "[]"
    );

    const updatedAppointments = allAppointments.map((appt: any) =>
      appt.id === appointmentId ? { ...appt, status: newStatus } : appt
    );

    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    // refresh UI
    setAppointments(
      updatedAppointments.filter(
        (a: any) => a.doctorName === loggedInDoctor.name
      )
    );
  };

  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = appointments.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  return (
    <div className="doctor-layout">
      <SideNavbar />

      <div className="doctor-content">
        <h3>Hi Doctor 👋</h3>
        <p>Your Appointments</p>

        {appointments.length === 0 ? (
          <p className="empty-text">No patients booked any appointment</p>
        ) : (
          <>
            <table className="patient-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Issue</th>
                  <th>Report Time</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {paginatedData.map((appt, index) => (
                  <tr
                    key={index}
                    className="table-row"
                    onClick={() => navigate("/patient")}
                  >
                    <td>{appt.patientName}</td>
                    <td>{appt.issue}</td>
                    <td>{appt.time}</td>
                    <td>{appt.date}</td>
                    <td>{appt.status}</td>

                    <td
                      className="action-cell"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {appt.status === "Confirmation Pending" ? (
                        <>
                          <span
                            className="action-text confirm"
                            onClick={() => updateStatus(appt.id, "Scheduled")}
                          >
                            Confirm
                          </span>
                          <span className="action-separator">|</span>
                          <span
                            className="action-text cancel"
                            onClick={() => updateStatus(appt.id, "Cancelled")}
                          >
                            Cancel
                          </span>
                        </>
                      ) : (
                        <span className="action-disabled">—</span>
                      )}
                    </td>
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
                disabled={startIndex + rowsPerPage >= appointments.length}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Doctor;
