"use client"

import { Reveal } from "@/components/reveal"

const STAGES = [
  {
    n: "01",
    key: "INGEST",
    title: "SIGNAL INGEST",
    desc: "On-chain yields, order-book depth, funding rates, macro feeds and tokenized-RWA marks stream into a unified market view.",
    io: "IN: 11 oracles · 68 venues",
  },
  {
    n: "02",
    key: "REASON",
    title: "INTELLIGENCE CORE",
    desc: "Self-evolving models score risk and opportunity, retraining each epoch and promoting new allocation policy only when it clears the risk budget.",
    io: "OUT: allocation policy",
  },
  {
    n: "03",
    key: "ALLOCATE",
    title: "TREASURY ALLOCATOR",
    desc: "Protocol revenue is routed across crypto and tokenized RWA to hit target mandates, sizing positions to conviction and liquidity.",
    io: "OUT: target weights",
  },
  {
    n: "04",
    key: "EXECUTE",
    title: "ON-CHAIN EXECUTION",
    desc: "Orders route to the deepest venues with slippage and position limits enforced. Every fill is settled and verifiable on-chain.",
    io: "OUT: signed txns",
  },
  {
    n: "05",
    key: "COMPOUND",
    title: "TREASURY + LOOP",
    desc: "Yield and fees compound back into the treasury; performance telemetry feeds the next training epoch. The loop never sleeps.",
    io: "→ back to 01",
  },
]

export function CRTArchitecture() {
  return (
    <section id="architecture" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="mb-12">
        <div className="text-xs tracking-[0.3em] glow-dim mb-3">
          -- SECTION 06 -----------------------------------------------
        </div>
        <Reveal
          as="h2"
          className="glow section-h2"
          style={{ fontFamily: "VT323, monospace", fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
        >
          ARCHITECTURE.MAP
        </Reveal>
        <div className="text-xs glow-dim tracking-widest mt-1">
          HOW THE SOVEREIGN AGENT CLOSES THE LOOP — DATA → DECISION → CAPITAL
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-px" style={{ border: "1px solid var(--crt-border-col)" }}>
        {STAGES.map((s, i) => (
          <div
            key={s.key}
            className="group relative p-5 flex flex-col transition-all duration-150"
            style={{ background: "var(--crt-paper)", border: "1px solid var(--crt-border-col)", minHeight: "260px" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(122,74,30,0.06)" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--crt-paper)" }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="glow"
                style={{ fontFamily: "VT323, monospace", fontSize: "1.6rem", color: "var(--crt-brown-bright)" }}
              >
                {s.n}
              </span>
              {/* flow arrow between stages */}
              <span
                className="text-lg"
                style={{ color: "var(--crt-brown-dim)", animation: "blink 2.4s step-start infinite" }}
                aria-hidden="true"
              >
                {i < STAGES.length - 1 ? "▸" : "↻"}
              </span>
            </div>

            <div
              className="tracking-wider glow-sm mb-1"
              style={{ fontFamily: "VT323, monospace", fontSize: "1.25rem", color: "var(--crt-brown-bright)" }}
            >
              {s.title}
            </div>
            <div className="text-[10px] tracking-widest mb-3" style={{ color: "var(--crt-brown-dim)" }}>
              [{s.key}]
            </div>

            <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--crt-brown)" }}>
              {s.desc}
            </p>

            <div
              className="mt-auto text-[10px] tracking-widest pt-2"
              style={{ color: "var(--crt-brown-dim)", borderTop: "1px solid var(--crt-border-col)" }}
            >
              {s.io}
            </div>
          </div>
        ))}
      </div>

      <div className="text-[10px] tracking-widest mt-4" style={{ color: "var(--crt-brown-dim)" }}>
        ◆ FULLY AUTONOMOUS — NO DISCRETIONARY DESK — EVERY STEP VERIFIABLE ON-CHAIN ◆
      </div>
    </section>
  )
}
