import "../../styles/app.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function ReportsPage() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          <h2>Reports</h2>
          <p style={{ marginTop: "12px", color: "#94a3b8" }}>
            Cashflow & payment reports will be shown here.
          </p>
        </div>
      </div>
    </div>
  );
}