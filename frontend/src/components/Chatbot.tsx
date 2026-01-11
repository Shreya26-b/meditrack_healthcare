import SideNavbar from "../components/SideNavbar";
import { FaRobot } from "react-icons/fa";
import "./Chatbot.css";

const Chatbot = () => {
  return (
    <div className="chatbot-page">
      <SideNavbar />

      <main className="chatbot-content">
        <div className="chatbot-header">
          <FaRobot className="chatbot-icon" />
          <h2>Healthcare Assistant</h2>
          <p>Ask health-related questions and get instant guidance</p>
        </div>

        <div className="chatbot-box">
          <div className="chatbot-messages">
            <div className="bot-message">
              👋 Hi! I’m your health assistant. How can I help you today?
            </div>
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              placeholder="Type your symptoms or question..."
              disabled
            />
            <button disabled>Send</button>
          </div>

          <p className="chatbot-note">
            ⚠️ Chatbot integration is under development
          </p>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;
