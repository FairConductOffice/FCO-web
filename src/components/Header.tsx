"use client";

import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "What we do", href: "/#what-we-do" },
  { label: "Who we help", href: "/#who-we-help" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <>
      {/* Top band */}
      <div style={{ backgroundColor: "#0B0C10", padding: "8px 0" }}>
        <div className="container">
          <span style={{ color: "#B1B4B6", fontSize: 14, letterSpacing: "0.05em" }}>
            conductoffice.co.uk
          </span>
        </div>
      </div>

      {/* Header */}
      <header style={{ backgroundColor: "#1A1A2E", borderBottom: "4px solid #D4351C" }}>
        <div
          className="container"
          style={{
            padding: "16px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              textDecoration: "none",
            }}
          >
            <Image
              src="/FCO_LOGO.png"
              alt="FCO"
              width={36}
              height={36}
              style={{ display: "block" }}
            />
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              The Conduct Office
            </span>
          </Link>

          <nav style={{ display: "flex", gap: 28 }}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 400,
                  paddingBottom: 2,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Phase banner */}
      <div style={{ backgroundColor: "#F3F2F1", borderBottom: "1px solid #B1B4B6" }}>
        <div className="container" style={{ padding: "10px 30px" }}>
          <span className="phase-tag">Advisory</span>
          <span style={{ fontSize: 14, color: "#505A5F" }}>
            Regulatory intelligence and compliance risk advisory for UK businesses.
          </span>
        </div>
      </div>
    </>
  );
}
