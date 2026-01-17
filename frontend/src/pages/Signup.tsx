import { Link, useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";
import "./Signup.css";

interface User {
  name: string;
  email: string;
  password: string;
  age: string;
  gender: string;
  role: "doctor" | "patient";
}

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<User>({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    role: "patient",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const existingUsers: User[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    // ✅ UNIQUE EMAIL CHECK
    const emailExists = existingUsers.some((u) => u.email === form.email);

    if (emailExists) {
      setError("Email already exists. Please login.");
      return;
    }

    existingUsers.push(form);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setError("");
    setSuccess(true);
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2 className="signup-title">Sign up</h2>

        <form onSubmit={handleSubmit} className="signup-form">
          {error && <p className="signup-error">{error}</p>}

          <div className="signup-field">
            <input
              name="name"
              placeholder="Enter your name"
              className="signup-input"
              onChange={handleChange}
              required
            />
          </div>

          <div className="signup-field">
            <input
              name="email"
              type="email"
              placeholder="Enter your mail"
              className="signup-input"
              onChange={handleChange}
              required
            />
          </div>

          <div className="signup-field">
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="signup-input"
              onChange={handleChange}
              required
            />
          </div>

          <div className="signup-field">
            <input
              name="age"
              placeholder="Age"
              className="signup-input"
              onChange={handleChange}
              required
            />
          </div>

          <div className="signup-field">
            <input
              name="gender"
              placeholder="Gender"
              className="signup-input"
              onChange={handleChange}
              required
            />
          </div>

          <div className="signup-field">
            <select
              name="role"
              className="signup-input"
              onChange={handleChange}
              required
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          <p className="signup-login-text">
            Already have an account?{" "}
            <Link to="/" className="signup-login-link">
              Login
            </Link>
          </p>
          <button type="submit" className="signup-button">
            Signup
          </button>
        </form>
      </div>

      {/* ✅ SUCCESS POPUP */}
      {success && (
        <div className="signup-modal">
          <div className="signup-modal-card">
            <h3>Signup Successful 🎉</h3>
            <p>Your account has been created.</p>

            <div className="modal-actions">
              <button onClick={() => navigate("/")}>Login</button>
              <button onClick={() => setSuccess(false)}>Go Back</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
