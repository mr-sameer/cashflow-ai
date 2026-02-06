import "../../styles/app.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function CustomersPage() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          <h2>Customers</h2>
          <p style={{ marginTop: "12px", color: "#94a3b8" }}>
            Customer list will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}