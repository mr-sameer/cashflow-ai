import "../styles/app.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar />

        <div className="dashboard-content">
          <div className="stats-grid">
            <StatCard title="Today’s Expected" value="₹18,400" />
            <StatCard title="Pending Payments" value="₹42,800" />
            <StatCard title="High Risk Customers" value="3" />
            <StatCard title="This Month Collected" value="₹1,24,000" />
          </div>
        </div>
      </div>
    </div>
  );
}