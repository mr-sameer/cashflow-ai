import "../../styles/app.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Link from "next/link";

export default function InvoicesPage() {
    return (
        <div className="dashboard">
            <Sidebar />

            <div className="dashboard-main">
                <Topbar />

                <div className="dashboard-content">
                    {/* Header */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "24px",
                        }}
                    >
                        <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
                            Invoices
                        </h2>



                        <Link href="/dashboard/invoices/create">
                            <button
                                style={{
                                    padding: "10px 16px",
                                    background: "#3b82f6",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                }}
                            >
                                + Create Invoice
                            </button>
                        </Link>
                    </div>

                    {/* Invoice Table */}
                    <div
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: "12px",
                            overflow: "hidden",
                        }}
                    >
                        <table
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                fontSize: "14px",
                            }}
                        >
                            <thead>
                                <tr
                                    style={{
                                        background: "rgba(255,255,255,0.04)",
                                        color: "#94a3b8",
                                        textAlign: "left",
                                    }}
                                >
                                    <th style={th}>Invoice #</th>
                                    <th style={th}>Customer</th>
                                    <th style={th}>Amount</th>
                                    <th style={th}>Due Date</th>
                                    <th style={th}>Status</th>
                                    <th style={th}>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <InvoiceRow
                                    id="INV-001"
                                    customer="Rahul Traders"
                                    amount="₹12,500"
                                    due="12 Feb 2026"
                                    status="Pending"
                                />
                                <InvoiceRow
                                    id="INV-002"
                                    customer="Amaan Stores"
                                    amount="₹8,200"
                                    due="10 Feb 2026"
                                    status="Paid"
                                />
                                <InvoiceRow
                                    id="INV-003"
                                    customer="Sharma Wholesale"
                                    amount="₹21,000"
                                    due="08 Feb 2026"
                                    status="Overdue"
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ===== Helper Components ===== */

function InvoiceRow({ id, customer, amount, due, status }) {
    const color =
        status === "Paid"
            ? "#22c55e"
            : status === "Overdue"
                ? "#ef4444"
                : "#facc15";

    return (
        <tr style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <td style={td}>{id}</td>
            <td style={td}>{customer}</td>
            <td style={td}>{amount}</td>
            <td style={td}>{due}</td>
            <td style={td}>
                <span
                    style={{
                        padding: "4px 10px",
                        borderRadius: "999px",
                        background: `${color}20`,
                        color,
                        fontSize: "12px",
                        fontWeight: "500",
                    }}
                >
                    {status}
                </span>
            </td>
            <td style={td}>
                <button
                    style={{
                        background: "transparent",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "white",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "12px",
                    }}
                >
                    View
                </button>
            </td>
        </tr>
    );
}

/* ===== Table cell styles ===== */
const th = {
    padding: "14px 16px",
    fontWeight: "500",
};

const td = {
    padding: "14px 16px",
};