import "../../../styles/app.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Link from "next/link";

export default function CreateInvoice() {
    return (
        <div className="dashboard">
            <Sidebar />

            <div className="dashboard-main">
                <Topbar />

                <div className="dashboard-content">
                    {/* Page Header */}
                    <div style={{ marginBottom: "24px" }}>
                        <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
                            Create Invoice
                        </h2>
                        <p style={{ marginTop: "6px", color: "#94a3b8", fontSize: "14px" }}>
                            Create and send invoice to your customer
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="form-card">
                        {/* Customer Section */}
                        <FormSection title="Customer Details">
                            <FormRow>
                                <Input label="Customer Name" placeholder="Rahul Traders" />
                                <Input label="Phone Number" placeholder="98765 43210" />
                            </FormRow>
                        </FormSection>

                        {/* Invoice Details */}
                        <FormSection title="Invoice Details">
                            <FormRow>
                                <Input label="Invoice Number" placeholder="INV-004" />
                                <Input label="Invoice Date" type="date" />
                            </FormRow>

                            <FormRow>
                                <Input label="Due Date" type="date" />
                                <Input label="Total Amount (₹)" placeholder="12500" />
                            </FormRow>
                        </FormSection>

                        {/* Notes */}
                        <FormSection title="Additional Notes">
                            <textarea
                                className="textarea"
                                placeholder="Payment terms or notes (optional)"
                            />
                        </FormSection>

                        {/* Actions */}
                        <div className="form-actions">
                            <Link href="/dashboard/invoices">
                                <button className="secondary-btn">Cancel</button>
                            </Link>
                            <Link href="/dashboard/invoices/preview">
                                <button className="primary-btn">Save & Preview</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ===== Reusable Form Components ===== */

function FormSection({ title, children }) {
    return (
        <div style={{ marginBottom: "28px" }}>
            <h3 style={{ fontSize: "14px", marginBottom: "12px", color: "#94a3b8" }}>
                {title}
            </h3>
            {children}
        </div>
    );
}

function FormRow({ children }) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "16px",
            }}
        >
            {children}
        </div>
    );
}

function Input({ label, placeholder, type = "text" }) {
    return (
        <div>
            <label className="label">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="input"
            />
        </div>
    );
}