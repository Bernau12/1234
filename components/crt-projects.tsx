"use client"

import { Reveal } from "@/components/reveal"

const WORKS = [
  {
    id: "ALLOC_001",
    title: "CRYPTO CORE",
    category: "DIGITAL ASSETS",
    target: "42%",
    desc: "Blue-chip crypto positions — BTC and ETH — held as the treasury's growth engine, actively rebalanced against volatility and on-chain momentum signals.",
    tags: ["BTC", "ETH", "SPOT + STAKING"],
    metrics: [
      { k: "TARGET WEIGHT", v: "42%" },
      { k: "MANDATE", v: "GROWTH" },
      { k: "REBALANCE", v: "DAILY" },
    ],
  },
  {
    id: "ALLOC_002",
    title: "TOKENIZED RWA",
    category: "REAL-WORLD ASSETS",
    target: "38%",
    desc: "Tokenized U.S. T-bills and private credit deliver stable, uncorrelated yield on-chain — anchoring the treasury with real-world cash flows.",
    tags: ["T-BILLS", "PRIVATE CREDIT", "STABLE YIELD"],
    metrics: [
      { k: "TARGET WEIGHT", v: "38%" },
      { k: "MANDATE", v: "STABILITY" },
      { k: "REBALANCE", v: "WEEKLY" },
    ],
  },
  {
    id: "ALLOC_003",
    title: "DEFI YIELD",
    category: "PROTOCOL STRATEGIES",
    target: "20%",
    desc: "Automated liquidity provision and lending across audited DeFi protocols, with position limits and drawdown controls managed autonomously by the agent.",
    tags: ["LP", "LENDING", "AUTO-REBALANCE"],
    metrics: [
      { k: "TARGET WEIGHT", v: "20%" },
      { k: "MANDATE", v: "CARRY" },
      { k: "REBALANCE", v: "CONTINUOUS" },
    ],
  },
]

export function CRTProjects() {
  return (
    <section id="work" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="mb-16">
        <div className="text-xs tracking-[0.3em] glow-dim mb-3">
          -- SECTION 03 -----------------------------------------------
        </div>
        <Reveal
          as="h2"
          className="glow section-h2"
          style={{ fontFamily: "VT323, monospace", fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
        >
          TREASURY_ALLOCATIONS
        </Reveal>
        <div className="text-xs glow-dim tracking-widest mt-1">
          {WORKS.length} BUCKETS — TARGET MANDATE — TVL $0 (PRE-LAUNCH)
        </div>
      </div>

      {/* Target allocation bar */}
      <div className="mb-10 crt-border p-5" style={{ background: "var(--crt-paper)" }}>
        <div className="flex items-center justify-between text-xs mb-3" style={{ color: "var(--crt-brown-dim)" }}>
          <span className="tracking-widest">$ cat ./target_allocation.cfg</span>
          <span className="tracking-widest">SUM = 100%</span>
        </div>
        <div
          className="flex w-full overflow-hidden"
          style={{ height: "22px", border: "1px solid var(--crt-border-col)" }}
        >
          {WORKS.map((w, i) => (
            <div
              key={w.id}
              className="flex items-center justify-center text-[10px] tracking-widest"
              style={{
                width: w.target,
                background: i === 0 ? "var(--crt-brown)" : i === 1 ? "rgba(28,61,0,0.5)" : "rgba(28,61,0,0.26)",
                color: i === 0 ? "var(--crt-bg)" : "var(--crt-brown-bright)",
                borderRight: i < WORKS.length - 1 ? "1px solid var(--crt-border-col)" : "none",
              }}
            >
              {w.target}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-[10px] tracking-widest" style={{ color: "var(--crt-brown-dim)" }}>
          {WORKS.map((w) => (
            <span key={w.id}>
              ▦ {w.title} — {w.target}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: "1px solid var(--crt-border-col)" }}>
        {WORKS.map((w) => (
          <AllocationCard key={w.id} work={w} />
        ))}
      </div>

      <div className="text-[10px] tracking-widest mt-4" style={{ color: "var(--crt-brown-dim)" }}>
        ◆ WEIGHTS ARE TARGET MANDATES — LIVE POSITIONS OPEN AFTER $PSA LAUNCH ◆
      </div>
    </section>
  )
}

function AllocationCard({ work }: { work: (typeof WORKS)[0] }) {
  return (
    <div
      className="group p-6 flex flex-col transition-all duration-150"
      style={{ background: "var(--crt-paper)", border: "1px solid var(--crt-border-col)", minHeight: "300px" }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(122,74,30,0.06)" }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "var(--crt-paper)" }}
    >
      {/* header row */}
      <div className="flex items-start justify-between mb-1">
        <span className="text-xs tracking-widest" style={{ color: "var(--crt-brown-dim)" }}>
          {work.id}
        </span>
        <span
          className="glow"
          style={{ fontFamily: "VT323, monospace", fontSize: "1.8rem", lineHeight: 1, color: "var(--crt-brown-bright)" }}
        >
          {work.target}
        </span>
      </div>

      <div
        className="tracking-wider glow-sm mb-1"
        style={{ fontFamily: "VT323, monospace", fontSize: "1.5rem", color: "var(--crt-brown-bright)" }}
      >
        {work.title}
      </div>
      <div className="text-xs tracking-widest mb-4" style={{ color: "var(--crt-brown-dim)" }}>
        {work.category}
      </div>

      <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--crt-brown)" }}>
        {work.desc}
      </p>

      {/* metrics */}
      <div className="mt-auto space-y-1.5 mb-4">
        {work.metrics.map((m) => (
          <div key={m.k} className="flex items-center justify-between text-[11px]">
            <span style={{ color: "var(--crt-brown-dim)" }}>{m.k}</span>
            <span
              className="tracking-widest"
              style={{ color: "var(--crt-brown-bright)", borderBottom: "1px dotted var(--crt-border-col)", flex: 1, margin: "0 8px", opacity: 0.4 }}
            />
            <span style={{ color: "var(--crt-brown)" }}>{m.v}</span>
          </div>
        ))}
      </div>

      {/* tags */}
      <div className="flex gap-2 flex-wrap">
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 tracking-widest"
            style={{ border: "1px solid var(--crt-border-col)", color: "var(--crt-brown-dim)" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
