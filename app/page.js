"use client";

import { useRouter } from "next/navigation";
import "./styles/marketing.css";

export default function Landing() {
  const router = useRouter();

  return (
    <div className="marketing-page">
      <div className="hero-card">
        <h1>
          Predict Cashflow. <br />
          <span>Get Paid Faster.</span>
        </h1>

        <p>
          AI-powered cashflow intelligence for Indian businesses.
        </p>

        <div className="actions">
          <button
            className="primary"
            onClick={() => router.push("/dashboard")}
          >
            Start Free
          </button>

          <button className="secondary">
            View Demo
          </button>
        </div>
      </div>
    </div>
  );
}