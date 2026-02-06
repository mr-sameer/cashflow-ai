import "../../../styles/app.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Link from "next/link";

export default function InvoicePreview() {
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
                            Invoice Preview
                        </h2>

                        <div style={{ display: "flex", gap: "12px" }}>
                            <Link href="/dashboard/invoices">
                                <button className="secondary-btn">Back</button>
                            </Link>
                            <Link href="/dashboard/invoices/send">
                                <button className="primary-btn">Send Invoice</button>
                            </Link>
                        </div>
                    </div>

                    {/* Invoice Preview Card */}
                    <div className="invoice-preview">
                        <div className="invoice-header">
                            <div>
                                <h3>Invoice</h3>
                                <p>INV-004</p>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <p><strong>Date:</strong> 10 Feb 2026</p>
                                <p><strong>Due:</strong> 15 Feb 2026</p>
                            </div>
                        </div>

                        <hr />

                        <div className="invoice-body">
                            <div>
                                <p className="label">Billed To</p>
                                <p><strong>Rahul Traders</strong></p>
                                <p>📞 98765 43210</p>
                            </div>

                            <div style={{ textAlign: "right" }}>
                                <p className="label">Total Amount</p>
                                <h2>₹12,500</h2>
                            </div>
                        </div>

                        <hr />

                        <div className="invoice-notes">
                            <p className="label">Notes</p>
                            <p>
                                Please clear the payment before due date.
                                Late payment may attract follow-up reminders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}