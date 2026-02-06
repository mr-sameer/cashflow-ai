import "../../../styles/app.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Link from "next/link";

export default function SendInvoice() {
    return (
        <div className="dashboard">
            <Sidebar />

            <div className="dashboard-main">
                <Topbar />

                <div className="dashboard-content">
                    {/* Header */}
                    <div style={{ marginBottom: "24px" }}>
                        <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
                            Send Invoice via WhatsApp
                        </h2>
                        <p style={{ marginTop: "6px", color: "#94a3b8", fontSize: "14px" }}>
                            Review message before sending to customer
                        </p>
                    </div>

                    <div className="whatsapp-grid">
                        {/* LEFT: Message Editor */}
                        <div className="form-card">
                            <h3 style={{ marginBottom: "16px" }}>Message</h3>

                            <label className="label">Customer WhatsApp Number</label>
                            <input
                                className="input"
                                placeholder="+91 98765 43210"
                            />

                            <label className="label" style={{ marginTop: "16px" }}>
                                Message Template
                            </label>
                            <select className="input">
                                <option>Polite Reminder</option>
                                <option>Friendly Follow-up</option>
                                <option>Firm Reminder</option>
                            </select>

                            <label className="label" style={{ marginTop: "16px" }}>
                                WhatsApp Message
                            </label>
                            <textarea
                                className="textarea"
                                defaultValue={`Hello Rahul Traders,

Your invoice INV-004 of ₹12,500 is ready.
Please complete the payment by 15 Feb 2026.

Invoice link:
https://example.com/invoice/INV-004

Thank you.`}
                            />

                            <div className="form-actions">
                                <Link href="/dashboard/invoices/preview">
                                    <button className="secondary-btn">Back</button>
                                </Link>
                                <button className="primary-btn">
                                    Send on WhatsApp
                                </button>
                            </div>
                        </div>

                        {/* RIGHT: WhatsApp Preview */}
                        <div className="whatsapp-preview">
                            <div className="whatsapp-header">
                                WhatsApp Preview
                            </div>

                            <div className="whatsapp-bubble">
                                <p>
                                    Hello Rahul Traders,<br /><br />
                                    Your invoice <strong>INV-004</strong> of
                                    <strong> ₹12,500</strong> is ready.<br />
                                    Please complete the payment by <strong>15 Feb 2026</strong>.
                                    <br /><br />
                                    Invoice link:<br />
                                    <span className="link">
                                        https://example.com/invoice/INV-004
                                    </span>
                                    <br /><br />
                                    Thank you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}