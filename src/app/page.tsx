import Link from "next/link";

const SERVICES = [
  {
    title: "Risk Snapshot",
    tag: "Complimentary",
    desc: "A preliminary review of your most visible compliance exposures. Regulations cited. Severity indicated.",
  },
  {
    title: "Full Risk Assessment",
    tag: "Engagement",
    desc: "Comprehensive gap analysis across all applicable regulatory frameworks. Every finding scored, cited, and evidenced.",
  },
  {
    title: "Remediation Plan",
    tag: "Engagement",
    desc: "Prioritised action plan with policy templates and implementation timelines. From identified gaps to documented compliance.",
  },
];

const SECTORS = [
  { sector: "Estate Agencies & Lettings", regs: "MLR 2017, PRS Act, CPRs, GDPR" },
  { sector: "IFAs & Wealth Management", regs: "FCA SYSC, COBS, SM&CR, Consumer Duty" },
  { sector: "Recruitment Agencies", regs: "Employment Agency Act, GDPR, IR35, AWR" },
  { sector: "Dental & Aesthetic Clinics", regs: "CQC, GDPR, ASA CAP Code, IRMER" },
  { sector: "E-commerce & DTC Brands", regs: "Consumer Rights Act, CPRs, PECR, GDPR" },
  { sector: "Accountancy Practices", regs: "MLR 2017, GDPR, OPBAS" },
];

const STEPS = [
  {
    title: "We research your business",
    desc: "An independent review of your publicly available information against the regulatory frameworks applicable to your sector.",
  },
  {
    title: "We present our findings",
    desc: "You receive a risk snapshot summarising the most significant gaps identified, with the relevant regulations cited.",
  },
  {
    title: "You decide what happens next",
    desc: "Full assessment, remediation plan, or take our findings to your own solicitor. The choice is yours.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="container" style={{ paddingTop: 60, paddingBottom: 50 }}>
        <div style={{ maxWidth: 900 }}>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            Check whether your business
            <br />
            meets its regulatory obligations.
          </h1>
          <p
            style={{
              fontSize: 20,
              color: "#505A5F",
              marginBottom: 32,
              lineHeight: 1.6,
              maxWidth: 720,
            }}
          >
            Most UK businesses in regulated sectors have compliance obligations they are not fully meeting. The Fair Conduct Office conducts independent reviews against the frameworks that apply to your sector and identifies where those obligations are not being met.
          </p>
          <Link href="#contact" className="btn-primary">
            Request a risk assessment
          </Link>
        </div>
      </div>

      <div className="container"><hr className="divider" /></div>

      {/* What we do */}
      <section id="what-we-do" className="container" style={{ paddingTop: 50, paddingBottom: 50 }}>
        <span className="section-label">What we do</span>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20, lineHeight: 1.2 }}>
          Compliance risk identification and remediation
        </h2>
        <p style={{ fontSize: 18, color: "#505A5F", maxWidth: 720, marginBottom: 40, lineHeight: 1.7 }}>
          We review your business against the regulations that apply to your sector. Where we find gaps, we document them, score them by severity, and provide a structured path to close them.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {SERVICES.map((s) => (
            <div key={s.title} className="summary-card">
              <div className="summary-card-header">
                <h3>{s.title}</h3>
                <span className="summary-card-tag">{s.tag}</span>
              </div>
              <div className="summary-card-body">
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="container"><hr className="divider" /></div>

      {/* Who we help */}
      <section id="who-we-help" className="container" style={{ paddingTop: 50, paddingBottom: 50 }}>
        <span className="section-label">Who we help</span>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20, lineHeight: 1.2 }}>
          UK businesses in regulated sectors
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
          {SECTORS.map((s, i) => (
            <div
              key={s.sector}
              style={{
                padding: "16px 0",
                borderBottom: "1px solid #B1B4B6",
                marginRight: i % 2 === 0 ? 30 : 0,
                marginLeft: i % 2 === 1 ? 30 : 0,
              }}
            >
              <p style={{ fontSize: 16, fontWeight: 700 }}>{s.sector}</p>
              <p style={{ marginTop: 4, fontSize: 14, color: "#505A5F" }}>{s.regs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Warning panel */}
      <div style={{ backgroundColor: "#F3F2F1", width: "100%" }}>
        <div className="container" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div className="warning-panel">
            <div className="warning-icon">!</div>
            <div>
              <p style={{ fontSize: 18, fontWeight: 700 }}>
                Regulatory enforcement has intensified.
              </p>
              <p style={{ marginTop: 8, fontSize: 16, color: "#505A5F", lineHeight: 1.6 }}>
                The Digital Markets, Competition and Consumers Act 2024 introduced personal liability for directors. The FCA, ICO, HMRC, and CMA are all increasing enforcement activity. Non-compliance carries material consequences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section id="how-it-works" className="container" style={{ paddingTop: 50, paddingBottom: 50 }}>
        <span className="section-label">How it works</span>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 32, lineHeight: 1.2 }}>
          Process
        </h2>
        <ol style={{ listStyle: "none", padding: 0 }}>
          {STEPS.map((step, i) => (
            <li key={i} style={{ display: "flex", gap: 24, marginBottom: 32, alignItems: "flex-start" }}>
              <div style={{ minWidth: 48, height: 48, backgroundColor: "#1A1A2E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 22 }}>{i + 1}</span>
              </div>
              <div style={{ borderBottom: "1px solid #B1B4B6", paddingBottom: 32, flexGrow: 1 }}>
                <h3 style={{ marginTop: 4, marginBottom: 8, fontSize: 20, fontWeight: 700 }}>{step.title}</h3>
                <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Disclosure inset */}
      <div className="container" style={{ paddingBottom: 50 }}>
        <div className="inset-text">
          <p style={{ fontSize: 15, color: "#505A5F", lineHeight: 1.7 }}>
            <strong>Responsible disclosure.</strong> Where we identify gaps posing serious and ongoing risk of material consumer harm, we may report findings to the appropriate regulatory body.
          </p>
        </div>
      </div>

      <div className="container"><hr className="divider" /></div>

      {/* Contact + Report side by side */}
      <section className="container" style={{ paddingTop: 50, paddingBottom: 50 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>

          {/* Contact */}
          <div id="contact">
            <span className="section-label">Contact</span>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20, lineHeight: 1.2 }}>
              Get in touch
            </h2>
            <p style={{ fontSize: 16, color: "#505A5F", marginBottom: 28, lineHeight: 1.7 }}>
              To request a risk assessment or discuss how we can help your business, contact us directly.
            </p>
            <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
              <a href="mailto:remediation@fairconductoffice.co.uk" style={{ color: "#1B3A5C" }}>
                remediation@fairconductoffice.co.uk
              </a>
            </p>
            <p style={{ fontSize: 15, color: "#505A5F", lineHeight: 1.7 }}>
              Include your company name and a brief description of what you need. We will respond within two working days.
            </p>
          </div>

          {/* Report */}
          <div id="report">
            <span className="section-label">Report</span>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20, lineHeight: 1.2 }}>
              Report a company
            </h2>
            <p style={{ fontSize: 16, color: "#505A5F", marginBottom: 12, lineHeight: 1.7 }}>
              If you believe a UK business is operating in breach of its regulatory obligations, you can report it to us anonymously.
            </p>
            <p style={{ fontSize: 14, color: "#505A5F", marginBottom: 28, lineHeight: 1.7 }}>
              All reports are treated in confidence. You are not required to identify yourself.
            </p>
            <div>
              <div className="form-group">
                <label className="form-label">Company name or website</label>
                <input type="text" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Sector (if known)</label>
                <input type="text" className="form-input" placeholder="e.g. Estate agency, financial advice, e-commerce" style={{ fontSize: 15 }} />
              </div>
              <div className="form-group" style={{ marginBottom: 24 }}>
                <label className="form-label">What concerns do you have?</label>
                <textarea rows={4} className="form-textarea" placeholder="Describe the regulatory concern." style={{ fontSize: 15 }} />
              </div>
              <button type="button" className="btn-secondary">
                Submit report
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
