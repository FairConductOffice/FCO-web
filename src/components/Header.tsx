"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "What we do", href: "/#what-we-do" },
  { label: "Who we help", href: "/#who-we-help" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {/* Header */}
      <header style={{ backgroundColor: "#1A1A2E", borderBottom: "4px solid #D4351C", width: "100%" }}>
        <div
          className="container"
          style={{
            paddingTop: 16,
            paddingBottom: 16,
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
              Fair Conduct Office
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

      {/* Closable disclaimer banner */}
      {showBanner && (
        <div style={{ backgroundColor: "#F3F2F1", borderBottom: "1px solid #B1B4B6", width: "100%" }}>
          <div className="container" style={{ paddingTop: 10, paddingBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="phase-tag">Disclosure</span>
              <span style={{ fontSize: 14, color: "#505A5F" }}>
                Where serious regulatory risk is identified, the Fair Conduct Office may refer findings to the appropriate regulatory authority in accordance with its responsible disclosure policy.
              </span>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              aria-label="Dismiss banner"
              style={{
                background: "none",
                border: "none",
                color: "#505A5F",
                fontSize: 20,
                fontWeight: 700,
                padding: "2px 8px",
                cursor: "pointer",
                fontFamily: "Arial, sans-serif",
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
