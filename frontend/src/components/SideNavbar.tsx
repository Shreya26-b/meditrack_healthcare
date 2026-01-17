import { NavLink, useNavigate } from "react-router-dom";
import "./SideNavbar.css";

type User = {
  role: "doctor" | "patient";
};

const SideNavbar = () => {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");
  const user: User | null = storedUser ? JSON.parse(storedUser) : null;

  const dashboardPath =
    user?.role === "doctor" ? "/doctor" : "/patient";

  const handleSignOut = () => {
    // localStorage.clear(); // clear auth/session
    navigate("/");
  };

  return (
    <aside className="side-navbar">
      <h3 className="nav-title">
        {user?.role === "doctor" ? "Doctor Panel" : "Patient Panel"}
      </h3>

      <ul>
        <li>
          <NavLink
            to={dashboardPath}
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

      <div className="nav-spacer" />

      <button className="signout-btn" onClick={handleSignOut}>
        Sign Out
      </button>
    </aside>
  );
};

export default SideNavbar;
