import { Link, useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";
import type { User } from "../types/User";
import "./Login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // 1️⃣ Get users from localStorage
    const users: User[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    // 2️⃣ Check if email exists
    const existingUser = users.find((u) => u.email === email);

    if (!existingUser) {
      setError("Mail ID does not exist. Please signup.");
      return;
    }

    // 3️⃣ Check password
    if (existingUser.password !== password) {
      setError("Incorrect password. Try again!");
      return;
    }

    // 4️⃣ Login success
    localStorage.setItem("user", JSON.stringify(existingUser));
    localStorage.setItem("role", existingUser.role);

    setLoggedUser(existingUser);
    setShowSuccess(true);
  };

  const handleSuccessOk = () => {
  if (!loggedUser) return;

  if (loggedUser.role === "doctor") {
    navigate("/doctor");
  } else {
    navigate("/patient");
  }
};


  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome back</h2>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <p className="login-error">{error}</p>}

          <div className="login-field">
            <input
              type="email"
              placeholder="Enter your mail"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-field">
            <input
              type="password"
              placeholder="Enter your password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <p className="login-signup-text">
            Don’t have an account?{" "}
            <Link to="/signup" className="login-signup-link">
              Signup
            </Link>
          </p>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>

      {/* ✅ Success Popup */}
      {showSuccess && (
        <div className="login-popup-overlay">
          <div className="login-popup">
            <p>Login successful 🎉</p>
            <button onClick={handleSuccessOk}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
