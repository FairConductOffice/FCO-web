export const metadata = {
  title: "Responsible Disclosure",
};

export default function ResponsibleDisclosure() {
  return (
    <div className="container" style={{ padding: "50px 30px 80px" }}>
      <span className="section-label">Policy</span>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24, lineHeight: 1.2 }}>
        Responsible disclosure policy
      </h1>

      <div style={{ maxWidth: 680 }}>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          The Fair Conduct Office operates a responsible disclosure policy.
          This policy applies to compliance gaps and digital security vulnerabilities
          identified during the course of our assessment work.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>
          Scope
        </h2>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          Where we identify compliance gaps that pose a serious and ongoing risk
          of material consumer harm, we may report relevant findings to the
          appropriate regulatory body. This applies only to matters of critical
          severity involving demonstrable risk to consumers or the public.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>
          Process
        </h2>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          Before any disclosure, the affected organisation will be notified of
          the findings and given a reasonable period to remediate. Disclosure
          will only proceed if the organisation fails to take corrective action
          within the agreed timeframe and the risk to consumers or the public
          remains material and ongoing.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>
          Limitations
        </h2>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          This policy does not apply to findings identified during paid
          engagements unless explicitly stated in the engagement contract. Client
          confidentiality is maintained at all times within the bounds of the
          law and regulatory obligation.
        </p>

        <p style={{ fontSize: 14, color: "#B1B4B6", marginTop: 40 }}>
          Last updated: March 2026
        </p>
      </div>
    </div>
  );
}
