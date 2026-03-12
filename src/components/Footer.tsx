import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#F3F2F1",
        borderTop: "1px solid #B1B4B6",
        marginTop: 40,
        width: "100%",
      }}
    >
      <div className="container" style={{ padding: "30px 30px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 24,
          }}
        >
          <div>
            <p style={{ marginBottom: 12, fontSize: 16, fontWeight: 700 }}>
              Fair Conduct Office
            </p>
            <p style={{ fontSize: 14, color: "#505A5F", lineHeight: 1.7 }}>
              Regulatory intelligence and compliance risk advisory.
              <br />
              remediation@fairconductoffice.co.uk
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <Link href="/privacy-policy" style={{ fontSize: 14, color: "#1B3A5C", display: "block", marginBottom: 6 }}>
              Privacy policy
            </Link>
            <Link href="/terms" style={{ fontSize: 14, color: "#1B3A5C", display: "block", marginBottom: 6 }}>
              Terms of engagement
            </Link>
            <Link href="/responsible-disclosure" style={{ fontSize: 14, color: "#1B3A5C", display: "block", marginBottom: 6 }}>
              Responsible disclosure
            </Link>
            <Link href="/#report" style={{ fontSize: 14, color: "#1B3A5C", display: "block" }}>
              Report a company
            </Link>
          </div>
        </div>
        <hr className="divider" style={{ marginBottom: 16 }} />
        <p style={{ fontSize: 13, color: "#B1B4B6" }}>
          This service does not constitute legal advice. The Fair Conduct Office is a
          trading name. We recommend consulting a qualified solicitor for legal
          interpretation and formal compliance sign-off.
        </p>
      </div>
    </footer>
  );
}
