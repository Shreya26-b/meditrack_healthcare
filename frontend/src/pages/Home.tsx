import Login from "./Login";
import "./Home.css";
import doctorImg from "../assets/3784074.jpg"; // adjust path

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Left Section */}
      <div className="home-left">
        <Login />
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
