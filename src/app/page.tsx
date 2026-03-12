import Link from "next/link";

const SERVICES = [
  {
    title: "Risk Snapshot",
    tag: "Free",
    desc: "A summary of the most visible compliance gaps in your business, with the relevant regulations cited and penalty ranges referenced. Designed to give you clarity on where you stand.",
  },
  {
    title: "Full Risk Assessment",
    tag: "£500 – £1,200",
    desc: "Comprehensive gap analysis across all applicable regulations. Every finding is risk-scored by likelihood and impact, with specific regulatory citations and evidence.",
  },
  {
    title: "Remediation Plan",
    tag: "£800 – £2,000",
    desc: "A prioritised action plan with policy templates, implementation timelines, and draft procedures. Takes you from identified gaps to documented compliance.",
  },
  {
    title: "Retained Advisory",
    tag: "£300 – £800/mo",
    desc: "Ongoing compliance monitoring, regulatory change briefings, and ad-hoc gap checks. For businesses that want continuous oversight.",
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
    desc: "We conduct an independent review of your publicly available information — website, terms, privacy policy, regulatory register entries, and Companies House filings — against the regulatory frameworks applicable to your sector.",
  },
  {
    title: "We present our findings",
    desc: "You receive a risk snapshot summarising the most significant compliance gaps identified, with the relevant regulations cited and the associated penalty ranges referenced.",
  },
  {
    title: "You decide what to do",
    desc: "If you want full visibility, we conduct a comprehensive risk assessment. If you want to fix the gaps, we provide a prioritised remediation plan with templates and timelines. If you have a solicitor or compliance team, you can take our findings to them directly.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="container" style={{ padding: "60px 30px 50px" }}>
        <div style={{ maxWidth: 680 }}>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            We identify regulatory gaps
            <br />
            before regulators do.
          </h1>
          <p
            style={{
              fontSize: 20,
              color: "#505A5F",
              marginBottom: 32,
              lineHeight: 1.6,
              maxWidth: 580,
            }}
          >
            The Conduct Office provides independent compliance risk assessments
            for UK businesses. We surface what's wrong, quantify the exposure,
            and give you a clear path to resolve it.
          </p>
          <Link href="#contact" className="btn-primary">
            Request a risk assessment
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="container">
        <hr className="divider" />
      </div>

      {/* What we do */}
      <section id="what-we-do" className="container" style={{ padding: "50px 30px" }}>
        <span className="section-label">What we do</span>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20, lineHeight: 1.2 }}>
          Compliance risk identification and remediation
        </h2>
        <p
          style={{
            fontSize: 18,
            color: "#505A5F",
            maxWidth: 620,
            marginBottom: 40,
            lineHeight: 1.7,
          }}
        >
          We review your business against the regulatory frameworks that apply
          to your sector. Where we find gaps, we document them, score them by
          severity, and provide a structured plan to close them.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
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

      {/* Divider */}
      <div className="container">
        <hr className="divider" />
      </div>

      {/* Who we help */}
      <section id="who-we-help" className="container" style={{ padding: "50px 30px" }}>
        <span className="section-label">Who we help</span>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20, lineHeight: 1.2 }}>
          UK businesses in regulated and high-risk sectors
        </h2>
        <p
          style={{
            fontSize: 18,
            color: "#505A5F",
            maxWidth: 620,
            marginBottom: 32,
            lineHeight: 1.7,
          }}
        >
          We work with SMEs that have compliance obligations but no dedicated
          compliance function.
        </p>

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
              <p style={{ marginTop: 4, fontSize: 14, color: "#505A5F" }}>
                {s.regs}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Warning panel */}
      <div style={{ backgroundColor: "#F3F2F1" }}>
        <div className="container" style={{ padding: "40px 30px" }}>
          <div className="warning-panel">
            <div className="warning-icon">!</div>
            <div>
              <p style={{ fontSize: 18, fontWeight: 700 }}>
                Most businesses we assess have between 10 and 30 compliance gaps
                they are unaware of.
              </p>
              <p
                style={{
                  marginTop: 8,
                  fontSize: 16,
                  color: "#505A5F",
                  lineHeight: 1.6,
                }}
              >
                Regulatory enforcement activity from the FCA, ICO, HMRC, and CMA
                has increased significantly. The Digital Markets, Competition and
                Consumers Act 2024 introduced new personal liability for
                directors. Non-compliance is no longer a matter of administrative
                inconvenience — it carries material financial and legal
                consequences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section id="how-it-works" className="container" style={{ padding: "50px 30px" }}>
        <span className="section-label">How it works</span>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 32, lineHeight: 1.2 }}>
          Process
        </h2>

        <ol style={{ listStyle: "none", padding: 0 }}>
          {STEPS.map((step, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: 24,
                marginBottom: 32,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  minWidth: 48,
                  height: 48,
                  backgroundColor: "#1A1A2E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 22 }}
                >
                  {i + 1}
                </span>
              </div>
              <div
                style={{
                  borderBottom: "1px solid #B1B4B6",
                  paddingBottom: 32,
                  flexGrow: 1,
                }}
              >
                <h3 style={{ marginTop: 4, marginBottom: 8, fontSize: 20, fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Disclosure inset */}
      <div className="container" style={{ paddingBottom: 50 }}>
        <div className="inset-text">
          <p style={{ fontSize: 15, color: "#505A5F", lineHeight: 1.7 }}>
            <strong>Responsible disclosure policy.</strong> The Conduct Office
            operates a responsible disclosure policy. Where we identify
            compliance gaps that pose a serious and ongoing risk of material
            consumer harm, we may report relevant findings to the appropriate
            regulatory body. This applies only to matters of critical severity
            involving demonstrable risk to consumers or the public.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="container">
        <hr className="divider" />
      </div>

      {/* Contact */}
      <section id="contact" className="container" style={{ padding: "50px 30px" }}>
        <span className="section-label">Contact</span>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20, lineHeight: 1.2 }}>
          Get in touch
        </h2>
        <p
          style={{
            fontSize: 18,
            color: "#505A5F",
            maxWidth: 560,
            marginBottom: 32,
            lineHeight: 1.7,
          }}
        >
          To request a risk assessment or discuss how we can help your business,
          contact us directly.
        </p>

        <div style={{ maxWidth: 460 }}>
          <div className="form-group">
            <label className="form-label">Full name</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Email address</label>
            <input type="email" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Company name</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group" style={{ marginBottom: 24 }}>
            <label className="form-label">How can we help?</label>
            <textarea rows={4} className="form-textarea" />
          </div>
          <button type="button" className="btn-green">
            Send message
          </button>
        </div>
      </section>
    </>
  );
}
