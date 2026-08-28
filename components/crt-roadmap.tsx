"use client"

import { Reveal } from "@/components/reveal"

const PHASES = [
  {
    tag: "PHASE 0",
    title: "GENESIS",
    status: "DONE",
    items: [
      "Sovereign agent architecture defined",
      "Self-evolving intelligence core trained on testnet",
      "Multi-asset mandate: crypto + tokenized RWA",
    ],
  },
  {
    tag: "PHASE 1",
    title: "PRE-LAUNCH",
    status: "ACTIVE",
    items: [
      "Public research desk in testnet simulation",
      "Risk engine + drawdown controls audited",
      "$PSA tokenomics & governance finalized",
    ],
  },
  {
    tag: "PHASE 2",
    title: "TGE + MAINNET",
    status: "NEXT",
    items: [
      "$PSA token generation event",
      "Treasury funded — first live allocations",
      "Revenue routing goes on-chain",
    ],
  },
  {
    tag: "PHASE 3",
    title: "AUTONOMY",
    status: "PLANNED",
    items: [
      "Full on-chain governance handover to $PSA holders",
      "RWA venue expansion across new jurisdictions",
      "Agent self-upgrades under DAO-set risk bounds",
    ],
  },
]

const STATUS_COLOR: Record<string, string> = {
  DONE: "var(--crt-brown-dim)",
  ACTIVE: "var(--crt-amber)",
  NEXT: "var(--crt-brown-bright)",
  PLANNED: "var(--crt-brown-dim)",
}

export function CRTRoadmap() {
  return (
    <section id="roadmap" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="mb-12">
        <div className="text-xs tracking-[0.3em] glow-dim mb-3">
          -- SECTION 07 -----------------------------------------------
        </div>
        <Reveal
          as="h2"
          className="glow section-h2"
          style={{ fontFamily: "VT323, monospace", fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
        >
          ROADMAP.LOG
        </Reveal>
        <div className="text-xs glow-dim tracking-widest mt-1">
          $ tail -f ./roadmap.log — THE PATH TO A FULLY SOVEREIGN TREASURY
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ border: "1px solid var(--crt-border-col)" }}>
        {PHASES.map((p) => (
          <div
            key={p.tag}
            className="p-6 flex flex-col transition-all duration-150"
            style={{ background: "var(--crt-paper)", border: "1px solid var(--crt-border-col)", minHeight: "280px" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(122,74,30,0.06)" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--crt-paper)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs tracking-widest" style={{ color: "var(--crt-brown-dim)" }}>
                {p.tag}
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-[10px] tracking-widest px-2 py-0.5"
                style={{ border: `1px solid ${STATUS_COLOR[p.status]}`, color: STATUS_COLOR[p.status] }}
              >
                {p.status === "ACTIVE" && (
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--crt-amber)", boxShadow: "0 0 6px var(--crt-amber)", animation: "blink 1.5s step-start infinite" }}
                  />
                )}
                {p.status}
              </span>
            </div>

            <div
              className="tracking-wider glow-sm mb-4"
              style={{ fontFamily: "VT323, monospace", fontSize: "1.6rem", color: "var(--crt-brown-bright)" }}
            >
              {p.title}
            </div>

            <ul className="space-y-2 text-xs leading-relaxed" style={{ color: "var(--crt-brown)" }}>
              {p.items.map((it, i) => (
                <li key={i} className="flex gap-2">
                  <span style={{ color: "var(--crt-brown-dim)" }}>{p.status === "DONE" ? "✓" : "›"}</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
