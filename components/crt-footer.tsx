export function CRTFooter() {
  return (
    <footer
      className="px-6 py-12"
      style={{ borderTop: "1px solid var(--crt-border-col)", background: "var(--crt-paper)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div
              className="glow text-3xl mb-2"
              style={{ fontFamily: "VT323, monospace" }}
            >
              PSA.AGENT
            </div>
            <div className="text-xs glow-dim tracking-widest mb-4">
              PON SOVEREIGN AGENT — $PSA
            </div>
            <div className="text-xs" style={{ color: "var(--crt-brown-dim)" }}>
              An autonomous AI treasury that evolves its<br />
              intelligence and compounds on-chain revenue.
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs tracking-widest glow-dim mb-4">NAVIGATE</div>
            <div className="space-y-2 text-xs" style={{ color: "var(--crt-brown)" }}>
              {[
                { label: "HOME", href: "#home" },
                { label: "TREASURY", href: "#work" },
                { label: "ENGINE", href: "#skills" },
                { label: "PROTOCOL", href: "#about" },
                { label: "LIVE DESK", href: "#desk" },
              ].map(({ label, href }) => (
                <div key={label}>
                  <a href={href} className="hover:glow-sm transition-all">
                    {">"} {label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <div className="text-xs tracking-widest glow-dim mb-4">CONNECT</div>
            <div className="space-y-2 text-xs" style={{ color: "var(--crt-brown)" }}>
              {[
                { label: "X / TWITTER", href: "https://x.com/psa_fund" },
                { label: "GITHUB", href: "https://github.com/axiomying/PSA" },
              ].map(({ label, href }) => (
                <div key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:glow-sm transition-all">
                    {">"} {label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-xs"
          style={{
            borderTop: "1px solid var(--crt-border-col)",
            color: "var(--crt-brown-dim)",
          }}
        >
          <div>© 2026 PON SOVEREIGN AGENT — $PSA — ALL RIGHTS RESERVED</div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{
                background: "var(--crt-amber)",
                boxShadow: "0 0 6px var(--crt-amber)",
                animation: "blink 2s step-start infinite",
              }}
            />
            <span>PRE-LAUNCH — $PSA TGE COMING SOON</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
