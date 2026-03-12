export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ padding: "50px 30px 80px" }}>
      <span className="section-label">Legal</span>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24, lineHeight: 1.2 }}>
        Privacy policy
      </h1>

      <div style={{ maxWidth: 680 }}>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          The Fair Conduct Office is committed to protecting your personal data. This
          policy explains what data we collect, how we use it, and your rights
          under UK GDPR and the Data Protection Act 2018.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>
          Data controller
        </h2>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          The Fair Conduct Office (trading name), operated by Aren Webb, is the
          data controller for personal data collected through this website and in the
          course of providing our services. Contact: remediation@fairconductoffice.co.uk.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>
          What data we collect
        </h2>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          We collect your name, email address, company name, and telephone number
          when you submit an enquiry through our website or engage with us
          directly. We also collect publicly available information about
          businesses in the course of conducting compliance assessments. We do
          not use cookies for tracking or analytics.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>
          Lawful basis for processing
        </h2>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          We process personal data on the basis of legitimate interest (Article
          6(1)(f) UK GDPR) for business-to-business outreach and the provision
          of compliance advisory services. Where we process data on behalf of a
          client engagement, our lawful basis is the performance of a contract
          (Article 6(1)(b) UK GDPR).
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>
          Retention
        </h2>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          Enquiry data is retained for 12 months from the date of last contact
          and then deleted. Client engagement data is retained for 6 years in
          accordance with HMRC record-keeping requirements for sole traders.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>
          Your rights
        </h2>
        <p style={{ fontSize: 16, color: "#505A5F", lineHeight: 1.7, marginBottom: 24 }}>
          Under UK GDPR, you have the right to access, rectify, erase, restrict,
          or object to the processing of your personal data. You also have the
          right to data portability and to lodge a complaint with the Information
          Commissioner's Office (ICO). To exercise any of these rights, contact
          remediation@fairconductoffice.co.uk.
        </p>

        <p style={{ fontSize: 14, color: "#B1B4B6", marginTop: 40 }}>
          Last updated: March 2026
        </p>
      </div>
    </div>
  );
}
