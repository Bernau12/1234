"use client"

import { Reveal } from "@/components/reveal"

const SKILLS = [
  {
    id: "01",
    title: "SELF-EVOLVING AI",
    desc: "The agent continuously retrains and upgrades its own models from live market data, refining allocation strategy every epoch without human intervention.",
    stat: "MODULE: INTELLIGENCE_CORE",
    icon: "◉",
  },
  {
    id: "02",
    title: "MARKET RESEARCH",
    desc: "On-chain and off-chain signals — liquidity, volatility, yields, and macro feeds — are synthesized into a real-time view of risk and opportunity.",
    stat: "MODULE: SIGNAL_ORACLE",
    icon: "▓",
  },
  {
    id: "03",
    title: "REVENUE ALLOCATION",
    desc: "Protocol-generated revenue is routed programmatically across a diversified book of crypto and tokenized real-world assets.",
    stat: "MODULE: TREASURY_ALLOCATOR",
    icon: "◈",
  },
  {
    id: "04",
    title: "RWA INTEGRATION",
    desc: "Tokenized T-bills, private credit, and real-world yield instruments are held on-chain, bridging DeFi returns with traditional stability.",
    stat: "MODULE: RWA_BRIDGE",
    icon: "▶",
  },
  {
    id: "05",
    title: "RISK MANAGEMENT",
    desc: "Position limits, drawdown controls, and automated rebalancing keep the treasury resilient across market regimes.",
    stat: "MODULE: RISK_ENGINE",
    icon: "◆",
  },
  {
    id: "06",
    title: "ON-CHAIN GOVERNANCE",
    desc: "$PSA holders steer mandates, risk parameters, and upgrades through transparent, trustless on-chain governance.",
    stat: "MODULE: GOVERNANCE_DAO",
    icon: "◐",
  },
]

export function CRTServices() {
  return (
    <section
      id="skills"
      className="px-6 py-24 max-w-6xl mx-auto"
    >
      <div className="mb-16">
        <div className="text-xs tracking-[0.3em] glow-dim mb-3">
          -- SECTION 02 -----------------------------------------------
        </div>
        <Reveal
          as="h2"
          className="glow section-h2"
          style={{ fontFamily: "VT323, monospace", fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
        >
          INTELLIGENCE.EXE
        </Reveal>
        <div className="text-xs glow-dim tracking-widest mt-1">
          AUTONOMOUS AGENT CAPABILITIES
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
        style={{ border: "1px solid var(--crt-border-col)" }}
      >
        {SKILLS.map((s) => (
          <SkillCard key={s.id} skill={s} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({ skill }: { skill: (typeof SKILLS)[0] }) {
  return (
    <div
      className="p-6 group cursor-pointer transition-all duration-150"
      style={{
        background: "var(--crt-paper)",
        border: "1px solid transparent",
        borderColor: "var(--crt-border-col)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.background = "rgba(122,74,30,0.06)"
        el.style.borderColor = "var(--crt-brown)"
        el.style.boxShadow = "inset 0 0 20px rgba(122,74,30,0.06)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = "var(--crt-paper)"
        el.style.borderColor = "var(--crt-border-col)"
        el.style.boxShadow = "none"
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="text-3xl glow-sm group-hover:glow"
          style={{ color: "var(--crt-brown-bright)", fontFamily: "VT323, monospace" }}
        >
          {skill.icon}
        </div>
        <span className="text-xs" style={{ color: "var(--crt-brown-dim)" }}>
          [{skill.id}]
        </span>
      </div>
      <div
        className="text-lg mb-3 glow-sm group-hover:glow tracking-wider"
        style={{ fontFamily: "VT323, monospace", color: "var(--crt-brown-bright)" }}
      >
        {skill.title}
      </div>
      <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--crt-brown)" }}>
        {skill.desc}
      </p>
      <div
        className="text-xs tracking-widest pt-3"
        style={{
          color: "var(--crt-brown-dim)",
          borderTop: "1px solid var(--crt-border-col)",
        }}
      >
        {skill.stat}
      </div>
    </div>
  )
}
