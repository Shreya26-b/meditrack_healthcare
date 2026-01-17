import Login from "./Login";
import "./Home.css";
import doctorImg from "../assets/3784074.jpg";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Left Section */}
      <div className="home-left">
        <div className="home-left-content">
          {/* 🔹 App Title */}
          <h1 className="app-title">MediTracker</h1>
          <p className="app-subtitle">
            Smart Healthcare Management Made Simple
          </p>

          <Login />
        </div>
      </div>

      {/* Right Section */}
      <div className="home-right">
        <img
          src={doctorImg}
          alt="Healthcare Illustration"
          className="home-image"
        />
      </div>
    </div>
  );
};

export default Home;
