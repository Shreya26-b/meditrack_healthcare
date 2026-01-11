import { Link, useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";
import { users } from "../data/Users"; // dummy data
import "./login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    // store user (dummy auth)
    localStorage.setItem("user", JSON.stringify(user));

    // role-based navigation
    if (user.role === "doctor") {
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
          {/* Error */}
          {error && <p className="login-error">{error}</p>}

          {/* Email */}
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

          {/* Password */}
          <div className="login-field">
            <input
              type="password"
              className="login-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Signup Link */}
          <p className="login-signup-text">
            Don’t have an account?{" "}
            <Link to="/signup" className="login-signup-link">
              Signup
            </Link>
          </p>

          {/* Submit */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
