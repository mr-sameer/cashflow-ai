import "../../styles/app.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function RemindersPage() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          <h2>Reminders</h2>
          <p style={{ marginTop: "12px", color: "#94a3b8" }}>
            Automated reminder system will be here.
          </p>
        </div>
      </div>
    </div>
  );
}