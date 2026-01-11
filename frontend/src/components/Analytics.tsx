import SideNavbar from "../components/SideNavbar";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Analytics.css";

const trendData = [
  { date: "Jan 10", bp: 120, sugar: 98 },
  { date: "Jan 11", bp: 125, sugar: 102 },
  { date: "Jan 12", bp: 118, sugar: 95 },
  { date: "Jan 13", bp: 130, sugar: 110 },
  { date: "Jan 14", bp: 122, sugar: 100 },
];

const comparisonData = [
  { name: "Last Week", value: 110 },
  { name: "This Week", value: 98 },
];

const Analytics = () => {
  return (
    <div className="analytics-layout">
      <SideNavbar />

      <div className="analytics-content">
        <h3>Health Analytics</h3>
        <p className="subtitle">Insights, Trends & Comparisons</p>

        {/* Health Score */}
        <div className="score-card">
          <h2>Health Score</h2>
          <div className="score">78 / 100</div>
          <p className="risk moderate">Moderate Risk</p>
        </div>

        {/* ================= Charts Section ================= */}
        <div className="analytics-charts">
          {/* Blood Pressure Trend */}
          <div className="chart-card">
            <h4>Blood Pressure Trend</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="bp"
                  stroke="#ef4444"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Sugar Level Trend */}
          <div className="chart-card">
            <h4>Sugar Level Trend</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sugar"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Comparison Bar Chart */}
          <div className="chart-card">
            <h4>Sugar Level Comparison</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ================= Insights ================= */}
        <div className="insights">
          <h4>Insights</h4>
          <ul>
            <li>✔ Sugar levels decreased by 8% this week</li>
            <li>⚠ Blood pressure spike observed on Jan 13</li>
            <li>✔ Overall vitals show stable improvement</li>
          </ul>
        </div>

        {/* ================= Recommendations ================= */}
        <div className="recommendations">
          <h4>Recommendations</h4>
          <p>• Maintain low sugar diet</p>
          <p>• Monitor BP daily</p>
          <p>• Schedule follow-up appointment</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
