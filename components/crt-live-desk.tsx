"use client"

import { useEffect, useRef, useState } from "react"
import { Reveal } from "@/components/reveal"

/* ── Content pools — all on-theme: autonomous treasury, crypto + tokenized RWA ── */

const BULLETS: string[] = [
  "Checked on-chain yields: tokenized T-bill vault at 4.92% APY, ~$12.4M deep.",
  "Basis watch: BTC perp funding 0.011%/8h — carry favorable, sizing long-basis.",
  "Mapping tokenized-RWA universe: 68 venues tracked across treasuries, credit, equities.",
  "Book: providing liquidity in USDC/PSA, a +/-8.2% band with ~$1.24M working, in range.",
  "Scanned lending markets: sUSDe supply 9.1% vs borrow 6.4% — spread capture open.",
  "Private-credit tranche re-priced: senior note yield 11.3%, 4.2% above benchmark.",
  "ETH staking rewards compounding: 3.4% base + 0.9% MEV, auto-restaked.",
  "Basis watch: GOOGL tokenized pool 0.86% above its real-market print.",
  "Volatility surface flat — reduced gamma exposure, widened market-making bands.",
  "Correlation matrix refreshed: RWA credit vs BTC at 0.08, diversification intact.",
  "Book: making markets in CASHCAT/USDG, a +/-15.4% band with ~$389 working, earning fee.",
  "Treasury inflow detected: +$84.2K protocol revenue routed to allocation buffer.",
  "Liquidity depth check: 4 venues below threshold, rerouting orders to deepest book.",
  "Oracle latency nominal: 42ms median across 11 price feeds, no stale marks.",
]

const TRAIN: string[] = [
  "Model epoch #{EPOCH} committed: allocation policy refined, sharpe +0.31.",
  "Intelligence update: reweighted RWA vs DeFi features, out-of-sample loss -1.8%.",
  "Backtest replayed 2,048 scenarios — max drawdown held under 4.1%.",
  "Self-eval passed: policy delta within risk budget, promoting to live weights.",
]

const DECISIONS: { label: string; why: string; tone: "hold" | "act" }[] = [
  { label: "HOLD", why: "scanning the market for opportunities", tone: "hold" },
  { label: "HOLD", why: "risk-adjusted edge below allocation threshold", tone: "hold" },
  { label: "ALLOCATE", why: "tokenized T-bill yield clears hurdle rate, sizing +2.4%", tone: "act" },
  { label: "ALLOCATE", why: "carry + convexity favorable, deploying idle buffer", tone: "act" },
  { label: "REBALANCE", why: "RWA weight drifted +2.1% over band, trimming to target", tone: "act" },
  { label: "REBALANCE", why: "correlation spike — rotating from DeFi LP into credit", tone: "act" },
]

type Block = {
  id: number
  time: string
  bullets: string[]
  decision: { label: string; why: string; tone: "hold" | "act" }
}

/* deterministic-ish pseudo picker seeded by counter (client-only, no SSR mismatch) */
function pick<T>(arr: T[], seed: number): T {
  return arr[Math.abs(Math.floor(Math.sin(seed) * 10000)) % arr.length]
}

function fmt(sec: number): string {
  const h = Math.floor(sec / 3600) % 24
  const m = Math.floor(sec / 60) % 60
  const s = sec % 60
  const p = (n: number) => String(n).padStart(2, "0")
  return `${p(h)}:${p(m)}:${p(s)}`
}

const MAX_BLOCKS = 9

export function CRTLiveDesk() {
  const [blocks, setBlocks] = useState<Block[]>([])
  const [epoch, setEpoch] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const counter = useRef(0)
  const baseSec = useRef(0)

  useEffect(() => {
    // base time = wall clock at mount, client only
    const now = new Date()
    baseSec.current = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()

    function makeBlock(): Block {
      const c = counter.current++
      const tSec = baseSec.current + c * 30
      const wantTrain = c % 4 === 3
      const bulletCount = 2 + (c % 3) // 2-4
      const bullets: string[] = []
      for (let i = 0; i < bulletCount; i++) {
        bullets.push(pick(BULLETS, c * 7 + i * 13 + 1))
      }
      if (wantTrain) {
        const t = pick(TRAIN, c * 3 + 2).replace("{EPOCH}", String(Math.floor(c / 4) + 1))
        bullets.splice(1, 0, t)
        setEpoch(Math.floor(c / 4) + 1)
      }
      return {
        id: c,
        time: fmt(tSec),
        bullets,
        decision: pick(DECISIONS, c * 5 + 3),
      }
    }

    // seed with 3 blocks
    setBlocks([makeBlock(), makeBlock(), makeBlock()])

    const iv = setInterval(() => {
      setBlocks((prev) => {
        const next = [...prev, makeBlock()]
        return next.length > MAX_BLOCKS ? next.slice(next.length - MAX_BLOCKS) : next
      })
    }, 3600)

    return () => clearInterval(iv)
  }, [])

  // auto-scroll to bottom on new block
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [blocks])

  return (
    <section id="desk" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="mb-10">
        <div className="text-xs tracking-[0.3em] glow-dim mb-3">
          -- SECTION 05 -----------------------------------------------
        </div>
        <Reveal
          as="h2"
          className="glow section-h2"
          style={{ fontFamily: "VT323, monospace", fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
        >
          LIVE_DESK.SH
        </Reveal>
        <div className="text-xs glow-dim tracking-widest mt-1">
          WATCH THE AGENT THINK — REAL-TIME RESEARCH & ALLOCATION FEED
        </div>
      </div>

      {/* Live telemetry strip */}
      <div translate="no" className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          { k: "TREASURY TVL", v: "$0", d: "PRE-LAUNCH" },
          { k: "24H NET YIELD", v: "$0", d: "NOT YET LIVE" },
          { k: "SIM EPOCH", v: `#${epoch}`, d: "TESTNET TRAINING" },
          { k: "CRYPTO / RWA", v: "62 / 38", d: "TARGET SPLIT" },
        ].map((m) => (
          <div key={m.k} className="p-4 crt-border" style={{ background: "var(--crt-paper)" }}>
            <div className="text-[10px] tracking-widest mb-1" style={{ color: "var(--crt-brown-dim)" }}>
              {m.k}
            </div>
            <div
              className="glow-sm"
              style={{ fontFamily: "VT323, monospace", fontSize: "1.7rem", lineHeight: 1, color: "var(--crt-brown-bright)" }}
            >
              {m.v}
            </div>
            <div className="text-[10px] tracking-widest mt-1" style={{ color: "var(--crt-amber)" }}>
              {m.d}
            </div>
          </div>
        ))}
      </div>

      {/* The terminal — a dark console embedded regardless of site theme */}
      <div translate="no" className="desk-term">
        {/* window chrome */}
        <div className="desk-bar">
          <div className="desk-lights">
            <span className="desk-dot" style={{ background: "#ff5f57" }} />
            <span className="desk-dot" style={{ background: "#febc2e" }} />
            <span className="desk-dot" style={{ background: "#28c840" }} />
          </div>
          <div className="desk-title">
            psa-agent · research desk · testnet sandbox
          </div>
          <div className="desk-live">
            <span className="desk-live-dot" />
            LIVE
          </div>
        </div>

        {/* console body */}
        <div className="desk-body" ref={scrollRef}>
          <div className="desk-head">
            sovereign agent v0.9 · strategy: multi-asset treasury · mode: pre-launch simulation
          </div>

          {blocks.length === 0 && (
            <div className="desk-dim">establishing secure channel to agent…</div>
          )}

          {blocks.map((b) => (
            <div key={b.id} className="desk-block">
              <div className="desk-cmd">
                <span className="desk-ts">[{b.time}]</span>{" "}
                <span className="desk-user">agent@pon</span>
                <span className="desk-path">:~/desk$</span>{" "}
                <span className="desk-run">evaluate</span>
              </div>
              {b.bullets.map((line, i) => (
                <div key={i} className="desk-line">
                  <span className="desk-arrow">›</span> {line}
                </div>
              ))}
              <div className={`desk-decision ${b.decision.tone === "act" ? "is-act" : ""}`}>
                <span className="desk-deco">○</span>{" "}
                <span className="desk-dlabel">{b.decision.label}</span>{" "}
                <span className="desk-dwhy">· why: {b.decision.why}</span>
              </div>
            </div>
          ))}

          <div className="desk-cursor">
            <span className="desk-ts">[{blocks.length ? "live" : "----"}]</span>{" "}
            <span className="desk-user">agent@pon</span>
            <span className="desk-path">:~/desk$</span>{" "}
            <span className="desk-blink">█</span>
          </div>
        </div>
      </div>

      <div className="text-[10px] tracking-widest mt-4" style={{ color: "var(--crt-brown-dim)" }}>
        ◆ FEED IS ILLUSTRATIVE — DECISIONS SHOWN ARE SIMULATED FOR DEMONSTRATION ◆
      </div>

      <style jsx>{`
        .desk-term {
          border: 1px solid #1d2a1d;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(40, 200, 64, 0.08), 0 20px 60px rgba(0, 0, 0, 0.45);
          background: #090d09;
        }
        .desk-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          background: linear-gradient(to bottom, #12180f, #0d120c);
          border-bottom: 1px solid #1d2a1d;
        }
        .desk-lights {
          display: flex;
          gap: 7px;
        }
        .desk-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
        }
        .desk-title {
          flex: 1;
          text-align: center;
          font-family: "Share Tech Mono", monospace;
          font-size: 13px;
          color: #6f9a6f;
          letter-spacing: 0.04em;
        }
        .desk-live {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: "Share Tech Mono", monospace;
          font-size: 12px;
          letter-spacing: 0.12em;
          color: #7dff8a;
        }
        .desk-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #28c840;
          box-shadow: 0 0 8px #28c840;
          animation: desk-pulse 1.4s ease-in-out infinite;
        }
        @keyframes desk-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(0.8); }
        }
        .desk-body {
          height: 460px;
          overflow-y: auto;
          padding: 20px 22px 28px;
          background:
            radial-gradient(ellipse at 50% 0%, rgba(40, 200, 64, 0.05), transparent 60%),
            #090d09;
          font-family: "Share Tech Mono", "Courier New", monospace;
          font-size: 14px;
          line-height: 1.7;
          scroll-behavior: smooth;
        }
        .desk-body::-webkit-scrollbar { width: 8px; }
        .desk-body::-webkit-scrollbar-thumb { background: #1d2a1d; border-radius: 4px; }
        .desk-head {
          color: #b7e35a;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px dashed #1d2a1d;
          text-shadow: 0 0 8px rgba(183, 227, 90, 0.3);
        }
        .desk-dim { color: #3d6b3d; }
        .desk-block { margin-bottom: 22px; }
        .desk-cmd { margin-bottom: 6px; }
        .desk-ts { color: #4a7a4a; }
        .desk-user { color: #5bd06b; }
        .desk-path { color: #3d6b3d; }
        .desk-run {
          color: #b7e35a;
          text-shadow: 0 0 8px rgba(183, 227, 90, 0.35);
        }
        .desk-line {
          color: #86c986;
          padding-left: 14px;
        }
        .desk-arrow { color: #3d6b3d; margin-right: 6px; }
        .desk-decision {
          display: inline-block;
          margin-top: 10px;
          padding: 8px 14px;
          border: 1px solid #223322;
          border-radius: 8px;
          background: rgba(30, 50, 30, 0.35);
          color: #6f9a6f;
        }
        .desk-decision.is-act {
          border-color: #2f5a2f;
          background: rgba(40, 200, 64, 0.08);
        }
        .desk-deco { color: #5bd06b; }
        .desk-dlabel {
          color: #9dffa0;
          letter-spacing: 0.06em;
          text-shadow: 0 0 8px rgba(40, 200, 64, 0.4);
        }
        .desk-dwhy { color: #6f9a6f; }
        .desk-cursor { margin-top: 4px; }
        .desk-blink {
          color: #7dff8a;
          animation: desk-blink 1.1s step-start infinite;
        }
        @keyframes desk-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @media (max-width: 640px) {
          .desk-title { font-size: 10px; }
          .desk-body { font-size: 12px; height: 400px; }
        }
      `}</style>
    </section>
  )
}
