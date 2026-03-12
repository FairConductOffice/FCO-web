export const metadata = {
  title: "Terms of Engagement — The Conduct Office",
};

export default function Terms() {
  return (
    <div className="container" style={{ padding: "50px 30px 80px" }}>
      <span className="section-label">Legal</span>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24, lineHeight: 1.2 }}>
        Terms of engagement
      </h1>

      <div style={{ maxWidth: 680 }}>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          These terms govern all engagements between The Conduct Office and its
          clients. By signing an engagement contract, you agree to the terms set
          out below.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>
          Scope of services
        </h2>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          The Conduct Office provides regulatory compliance risk assessments and
          digital security audits based on publicly available information. The
          specific scope of each engagement is defined in the signed engagement
          contract.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>
          Disclaimer
        </h2>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          Our reports do not constitute legal advice. We are not solicitors and
          our findings should not be treated as a substitute for formal legal
          counsel. Our security assessments are based on passive, publicly
          observable analysis only and do not constitute certified penetration
          testing.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>
          Confidentiality
        </h2>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          All client data, findings, and engagement details are treated as
          confidential and will not be disclosed to third parties except as
          required by law or as set out in our responsible disclosure policy.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>
          Payment terms
        </h2>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          Payment is due as follows: 50% of the agreed fee upon signing the
          engagement contract, and 50% upon delivery of the final report.
          Invoices are payable within 14 days of issue. Work will not commence
          until the initial payment has been received.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>
          Deliverables
        </h2>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          Reports are delivered in PDF format via secure email. The specific
          deliverables for each engagement are defined in the engagement
          contract.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>
          Responsible disclosure
        </h2>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          The Conduct Office operates a responsible disclosure policy. Full
          details are available on our{" "}
          <a href="/responsible-disclosure" style={{ color: "#1B3A5C" }}>
            responsible disclosure page
          </a>
          .
        </p>

        <p style={{ fontSize: 14, color: "#B1B4B6", marginTop: 40 }}>
          Last updated: March 2026
        </p>
      </div>
    </div>
  );
}
