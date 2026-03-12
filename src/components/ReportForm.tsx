"use client";

import { useState } from "react";

export function ReportForm() {
  const [company, setCompany] = useState("");
  const [sector, setSector] = useState("");
  const [concerns, setConcerns] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit() {
    if (!company.trim() || !concerns.trim()) {
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company, sector, concerns }),
      });

      if (res.ok) {
        setStatus("sent");
        setCompany("");
        setSector("");
        setConcerns("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div style={{ borderLeft: "4px solid #00703C", padding: "16px 24px", backgroundColor: "#F8F8F8" }}>
        <p style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Report submitted.</p>
        <p style={{ fontSize: 15, color: "#505A5F", lineHeight: 1.6 }}>
          Your report has been received and will be reviewed. You do not need to take any further action.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="form-group">
        <label className="form-label">Company name or website</label>
        <input
          type="text"
          className="form-input"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Sector (if known)</label>
        <input
          type="text"
          className="form-input"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          placeholder="e.g. Estate agency, financial advice, e-commerce"
          style={{ fontSize: 15 }}
        />
      </div>
      <div className="form-group" style={{ marginBottom: 24 }}>
        <label className="form-label">What concerns do you have?</label>
        <textarea
          rows={4}
          className="form-textarea"
          value={concerns}
          onChange={(e) => setConcerns(e.target.value)}
          placeholder="Describe the regulatory concern."
          style={{ fontSize: 15 }}
        />
      </div>
      <button
        type="button"
        className="btn-secondary"
        onClick={handleSubmit}
        disabled={status === "sending"}
        style={{ opacity: status === "sending" ? 0.6 : 1 }}
      >
        {status === "sending" ? "Submitting\u2026" : "Submit report"}
      </button>
      {status === "error" && (
        <p style={{ marginTop: 12, fontSize: 14, color: "#D4351C" }}>
          There was a problem submitting your report. Please try again or email remediation@fairconductoffice.co.uk directly.
        </p>
      )}
    </div>
  );
}
