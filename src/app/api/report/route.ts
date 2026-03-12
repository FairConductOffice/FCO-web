import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { company, sector, concerns } = body;

    if (!company || !concerns) {
      return NextResponse.json(
        { error: "Company name and concerns are required." },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "reports@fairconductoffice.co.uk",
        to: "remediation@fairconductoffice.co.uk",
        subject: `[Report] ${company}`,
        text: [
          `Company: ${company}`,
          `Sector: ${sector || "Not specified"}`,
          ``,
          `Concerns:`,
          concerns,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send report." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Report API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
