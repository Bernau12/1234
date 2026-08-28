"use client"

import { useState } from "react"
import { useTheme } from "@/lib/theme-context"

const NAV_ITEMS = [
  { label: "HOME",      href: "#home" },
  { label: "TREASURY",  href: "#work" },
  { label: "ENGINE",    href: "#skills" },
  { label: "PROTOCOL",  href: "#about" },
  { label: "LIVE",      href: "#desk" },
]

/* ── Windows XP taskbar nav ───────────────────────────── */
function XPNav() {
  const [active, setActive] = useState("HOME")
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
    >
      {/* Titlebar */}
      <div
        style={{
          background: "linear-gradient(to bottom, #0A246A 0%, #316AC5 8%, #2563C7 50%, #1B54B8 100%)",
          padding: "3px 6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "12px", color: "#FFD700", fontWeight: "bold" }}>⊞</span>
          <span style={{ fontSize: "11px", color: "#FFFFFF", fontWeight: "bold", textShadow: "1px 1px 0 #0A246A" }}>
            PON Sovereign Agent — $PSA
          </span>
        </div>
        {/* Window controls */}
        <div style={{ display: "flex", gap: "2px" }}>
          {["_", "□", "✕"].map((c, i) => (
            <div
              key={i}
              style={{
                width: "18px", height: "16px",
                background: i === 2
                  ? "linear-gradient(to bottom, #E84040 0%, #C02020 100%)"
                  : "linear-gradient(to bottom, #4A90D8 0%, #3070C0 100%)",
                border: "1px outset #6AB0F8",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "9px", color: "#FFF", cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
      {/* Menu bar */}
      <div
        style={{
          background: "#ECE9D8",
          borderBottom: "1px solid #ACA899",
          padding: "1px 4px",
          display: "flex", alignItems: "center", gap: "0",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            style={{
              fontSize: "11px",
              padding: "2px 8px",
              color: "#000",
              background: active === item.label ? "#316AC5" : "transparent",
              color2: active === item.label ? "#FFF" : "#000",
              color: active === item.label ? "#FFF" : "#000",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
          </a>
        ))}
        <div style={{ marginLeft: "auto", fontSize: "11px", color: "#444", padding: "2px 8px" }}>
          <span
            style={{
              display: "inline-block",
              width: "8px", height: "8px",
              borderRadius: "50%",
              background: "#4CAF50",
              boxShadow: "0 0 4px #4CAF50",
              marginRight: "4px",
              verticalAlign: "middle",
            }}
          />
          Online
        </div>
      </div>
    </nav>
  )
}

/* ── Classic Mac OS 9 menu bar nav ──────────────────────── */
function MacNav() {
  const [active, setActive] = useState("HOME")
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ fontFamily: "Geneva, Charcoal, Arial, sans-serif" }}
    >
      <div
        style={{
          background: "linear-gradient(to bottom, #DDDDDD 0%, #AAAAAA 100%)",
          borderBottom: "1px solid #888888",
          padding: "2px 8px",
          display: "flex",
          alignItems: "center",
          gap: "0",
          height: "22px",
        }}
      >
        {/* Apple menu */}
        <div
          style={{
            fontSize: "14px",
            padding: "0 10px",
            fontWeight: "bold",
            color: "#000",
            borderRight: "1px solid #888",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          
        </div>

        {/* Site name */}
        <div
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "#000",
            padding: "0 12px",
            borderRight: "1px solid #888",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          PSA.Agent
        </div>

        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            style={{
              fontSize: "11px",
              padding: "0 10px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              color: "#000",
              background: active === item.label
                ? "linear-gradient(to bottom, #0055CC 0%, #0044AA 100%)"
                : "transparent",
              color: active === item.label ? "#FFF" : "#000",
              textDecoration: "none",
              borderRadius: "0",
            }}
          >
            {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
          </a>
        ))}

        {/* Right: clock */}
        <div
          style={{
            marginLeft: "auto",
            fontSize: "11px",
            color: "#000",
            padding: "0 8px",
            borderLeft: "1px solid #888",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </nav>
  )
}

/* ── CRT terminal nav (original) ─────────────────────── */
function CRTNavInner() {
  const [active, setActive] = useState("HOME")
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 font-mono"
      style={{ borderBottom: "1px solid var(--crt-border-col)" }}
    >
      <div
        className="flex items-center justify-between px-6 py-3"
        style={{ background: "rgba(198,240,0,0.96)", backdropFilter: "blur(2px)" }}
      >
        <a
          href="#home"
          className="flex items-center gap-3 glow"
          style={{ fontFamily: "VT323, monospace", fontSize: "1.6rem" }}
        >
          <span style={{ color: "var(--crt-brown-bright)" }}>▶</span>
          PSA.AGENT
        </a>

        <div className="hidden md:flex items-center gap-6 text-xs tracking-widest">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className="transition-all duration-100"
              style={{
                color: active === item.label ? "var(--crt-brown-bright)" : "var(--crt-brown-dim)",
                textShadow: active === item.label ? "var(--crt-glow-sm)" : "none",
              }}
            >
              {active === item.label ? `[ ${item.label} ]` : item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 text-xs" style={{ color: "var(--crt-brown-dim)" }}>
          <a
            href="https://x.com/psa_fund"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PSA on X"
            className="transition-opacity duration-100 hover:opacity-100 opacity-70"
            style={{ color: "var(--crt-brown)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://github.com/axiomying/PSA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PSA on GitHub"
            className="transition-opacity duration-100 hover:opacity-100 opacity-70"
            style={{ color: "var(--crt-brown)" }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.575.106.785-.25.785-.556 0-.274-.01-1-.015-1.964-3.196.695-3.87-1.54-3.87-1.54-.523-1.33-1.276-1.684-1.276-1.684-1.043-.713.08-.699.08-.699 1.153.081 1.76 1.184 1.76 1.184 1.026 1.757 2.693 1.25 3.35.955.104-.743.401-1.25.73-1.538-2.552-.29-5.236-1.276-5.236-5.68 0-1.255.448-2.28 1.183-3.084-.119-.29-.513-1.458.112-3.04 0 0 .965-.309 3.163 1.178A11 11 0 0 1 12 6.844c.977.005 1.962.132 2.882.387 2.196-1.487 3.16-1.178 3.16-1.178.626 1.582.232 2.75.114 3.04.737.804 1.18 1.83 1.18 3.084 0 4.415-2.688 5.386-5.25 5.67.413.355.78 1.056.78 2.13 0 1.538-.014 2.778-.014 3.156 0 .309.207.668.79.555A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>
          <span style={{ opacity: 0.4 }}>|</span>
          <span className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{
                background: "var(--crt-amber)",
                boxShadow: "0 0 6px var(--crt-amber)",
                animation: "blink 2s step-start infinite",
              }}
            />
            ONLINE
          </span>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <a
            href="https://x.com/psa_fund"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PSA on X"
            className="opacity-80"
            style={{ color: "var(--crt-brown)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://github.com/axiomying/PSA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PSA on GitHub"
            className="opacity-80"
            style={{ color: "var(--crt-brown)" }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.575.106.785-.25.785-.556 0-.274-.01-1-.015-1.964-3.196.695-3.87-1.54-3.87-1.54-.523-1.33-1.276-1.684-1.276-1.684-1.043-.713.08-.699.08-.699 1.153.081 1.76 1.184 1.76 1.184 1.026 1.757 2.693 1.25 3.35.955.104-.743.401-1.25.73-1.538-2.552-.29-5.236-1.276-5.236-5.68 0-1.255.448-2.28 1.183-3.084-.119-.29-.513-1.458.112-3.04 0 0 .965-.309 3.163 1.178A11 11 0 0 1 12 6.844c.977.005 1.962.132 2.882.387 2.196-1.487 3.16-1.178 3.16-1.178.626 1.582.232 2.75.114 3.04.737.804 1.18 1.83 1.18 3.084 0 4.415-2.688 5.386-5.25 5.67.413.355.78 1.056.78 2.13 0 1.538-.014 2.778-.014 3.156 0 .309.207.668.79.555A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>
          <button
            className="text-xs tracking-widest glow-sm"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{ color: "var(--crt-brown)" }}
          >
            {menuOpen ? "[ CLOSE ]" : "[ MENU ]"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 space-y-3 text-sm tracking-widest"
          style={{ background: "rgba(198,240,0,0.99)", borderTop: "1px solid var(--crt-border-col)" }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => { setActive(item.label); setMenuOpen(false) }}
              className="block"
              style={{ color: active === item.label ? "var(--crt-brown-bright)" : "var(--crt-brown-dim)" }}
            >
              {">"} {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

/* ── Router ───────────────────────────────────────────── */
export function CRTNav() {
  const { theme } = useTheme()
  if (theme === "xp")  return <XPNav />
  if (theme === "mac") return <MacNav />
  return <CRTNavInner />
}
