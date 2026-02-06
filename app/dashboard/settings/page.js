import "../../styles/app.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function SettingsPage() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          <h2>Settings</h2>
          <p style={{ marginTop: "12px", color: "#94a3b8" }}>
            Business & account settings will be here.
          </p>
        </div>
      </div>
    </div>
  );
}