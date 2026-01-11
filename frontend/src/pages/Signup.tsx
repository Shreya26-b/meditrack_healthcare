import { Link } from "react-router-dom";
import type { FormEvent } from "react";
import "./Signup.css";

const Signup: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signup submitted");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2 className="signup-title">Sign up</h2>

        <form onSubmit={handleSubmit} className="signup-form">
          {/* Name */}
          <div className="signup-field">
            <input
              type="text"
              placeholder="Enter your name"
              className="signup-input"
              required
            />
          </div>

          <div className="signup-field">
            <input
              type="text"
              placeholder="Enter your mail"
              className="signup-input"
              required
            />
          </div>

          {/* Password */}
          <div className="signup-field">
            <input
              type="password"
              className="signup-input"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="signup-field">
            <input
              type="password"
              className="signup-input"
              placeholder="Re-enter your password"
              required
            />
          </div>

          <div className="signup-field">
            <input
              type="password"
              className="signup-input"
              placeholder="Enter your age"
              required
            />
          </div>

          <div className="signup-field">
            <input
              type="password"
              className="signup-input"
              placeholder="Gender"
              required
            />
          </div>

          <div className="signup-field">
            <input
              type="password"
              className="signup-input"
              placeholder="Enter your number"
              required
            />
          </div>

          <div className="signup-field">
            <input
              type="password"
              className="signup-input"
              placeholder="Doctor/Patient"
              required
            />
          </div>

          {/* Signup Link */}
          <p className="signup-login-text">
            Already have an account?{" "}
            <Link to="/" className="signup-login-link">
              Login
            </Link>
          </p>

          {/* Submit */}
          <div className="signup-field">
          <button type="submit" className="signup-button">
            Signup
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
