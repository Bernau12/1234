"use client"

import { Reveal } from "@/components/reveal"

const STATS = [
  { label: "TOTAL VALUE LOCKED", value: "$0", unit: "TVL" },
  { label: "TREASURY APY", value: "0%", unit: "ANNUAL" },
  { label: "MODEL EPOCHS TRAINED", value: "0", unit: "EPOCHS" },
  { label: "LAUNCH STATUS", value: "SOON", unit: "PRE-TGE" },
]

const TOOLS = [
  { name: "INTELLIGENCE CORE", role: "SELF-EVOLVING MODELS", status: "ACTIVE" },
  { name: "TREASURY ALLOCATOR", role: "REVENUE ROUTING", status: "ACTIVE" },
  { name: "RWA BRIDGE", role: "TOKENIZED ASSETS", status: "ACTIVE" },
  { name: "SIGNAL ORACLE", role: "MARKET DATA FEEDS", status: "ACTIVE" },
  { name: "RISK ENGINE", role: "DRAWDOWN CONTROLS", status: "ACTIVE" },
  { name: "GOVERNANCE DAO", role: "$PSA HOLDER VOTES", status: "ACTIVE" },
]

export function CRTAbout() {
  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="mb-16">
        <div className="text-xs tracking-[0.3em] glow-dim mb-3">
          -- SECTION 04 -----------------------------------------------
        </div>
        <Reveal
          as="h2"
          className="glow section-h2"
          style={{ fontFamily: "VT323, monospace", fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
        >
          PROTOCOL.TXT
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left: bio + stats */}
        <div>
          <div
            className="p-6 crt-border text-sm leading-relaxed space-y-4 mb-8"
            style={{ background: "var(--crt-paper)", color: "var(--crt-brown)" }}
          >
            <div className="text-xs tracking-widest glow-dim mb-2">
              $ cat protocol.txt
            </div>
            <p>
              PON Sovereign Agent is an autonomous AI treasury. It continuously evolves its own intelligence and allocates protocol-generated revenue across crypto and tokenized real-world assets.
            </p>
            <p>
              No fund managers. No discretionary desks. The agent researches markets, sizes positions, and rebalances on-chain — compounding the treasury epoch after epoch, fully transparent and verifiable.
            </p>
            <p style={{ color: "var(--crt-brown-dim)" }}>
              $PSA is the governance and value-accrual token. Holders direct the agent's mandate and risk parameters, and share in the treasury it grows.
            </p>
            <div className="pt-3" style={{ borderTop: "1px solid var(--crt-border-col)" }}>
              <span
                className="inline-flex items-center gap-2 text-xs tracking-widest"
                style={{ color: "var(--crt-amber)" }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--crt-amber)", boxShadow: "0 0 6px var(--crt-amber)", animation: "blink 2s step-start infinite" }}
                />
                PRE-LAUNCH — TREASURY NOT YET FUNDED
              </span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-0" style={{ border: "1px solid var(--crt-border-col)" }}>
            {STATS.map((s) => (
              <div
                key={s.label}
                className="p-4"
                style={{
                  borderRight: "1px solid var(--crt-border-col)",
                  borderBottom: "1px solid var(--crt-border-col)",
                  background: "var(--crt-paper)",
                }}
              >
                <div
                  className="glow"
                  style={{ fontFamily: "VT323, monospace", fontSize: "2rem" }}
                >
                  {s.value}
                </div>
                <div className="text-xs" style={{ color: "var(--crt-brown-dim)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: tools list */}
        <div>
          <div className="text-xs tracking-widest glow-dim mb-4">
            $ ls ./modules — {TOOLS.filter(t => t.status === "ACTIVE").length} ACTIVE
          </div>
          <div className="space-y-0" style={{ border: "1px solid var(--crt-border-col)" }}>
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="p-4 group cursor-pointer transition-all duration-100"
                style={{
                  borderBottom: "1px solid var(--crt-border-col)",
                  background: "var(--crt-paper)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(122,74,30,0.06)" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--crt-paper)" }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className="group-hover:glow-sm transition-all"
                      style={{ fontFamily: "VT323, monospace", fontSize: "1.2rem", color: "var(--crt-brown-bright)" }}
                    >
                      {tool.name}
                    </span>
                    <div className="text-xs mt-0.5" style={{ color: "var(--crt-brown-dim)" }}>
                      {tool.role}
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--crt-brown-dim)" }}>
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full"
                      style={{
                        background: tool.status === "ACTIVE" ? "var(--crt-amber)" : "var(--crt-brown-dim)",
                        boxShadow: tool.status === "ACTIVE" ? "0 0 6px var(--crt-amber)" : "none",
                      }}
                    />
                    {tool.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
