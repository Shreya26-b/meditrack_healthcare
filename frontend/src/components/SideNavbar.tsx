import { NavLink, useNavigate } from "react-router-dom";
import "./SideNavbar.css";

const SideNavbar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.clear(); // clear auth/session
    navigate("/");
  };
  return (
    <aside className="side-navbar">
      <h3 className="nav-title">Patient Panel</h3>
      <div>
        <ul>
          <li>
            <NavLink
              to="/patient"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/appointment"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Appointment
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/chatbot"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Chatbot
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/symptoms"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Symptom Tracker
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Health Analytics
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-spacer" />

      <button className="signout-btn" onClick={handleSignOut}>
        Sign Out
      </button>
    </aside>
  );
};

export default SideNavbar;
