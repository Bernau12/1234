"use client"

import { useState } from "react"
import { ThemeProvider, useTheme } from "@/lib/theme-context"
import { ThemeSwitcher, ThemeTransition } from "@/components/theme-switcher"
import { CRTOverlay } from "@/components/crt-overlay"
import { BootSequence } from "@/components/boot-sequence"
import { CRTNav } from "@/components/crt-nav"
import { CRTTicker, CRTHero } from "@/components/crt-hero"
import { CRTServices } from "@/components/crt-services"
import { CRTProjects } from "@/components/crt-projects"
import { CRTAbout } from "@/components/crt-about"
import { CRTLiveDesk } from "@/components/crt-live-desk"
import { CRTArchitecture } from "@/components/crt-architecture"
import { CRTRoadmap } from "@/components/crt-roadmap"
import { CRTFooter } from "@/components/crt-footer"
import { Reveal } from "@/components/reveal"

function SiteContent() {
  const [booted, setBooted] = useState(false)
  const { theme } = useTheme()

  const navHeight = theme === "xp" ? "72px" : theme === "mac" ? "26px" : "52px"

  return (
    <main
      className="min-h-screen"
      style={{
        background: "var(--crt-bg)",
        animation: theme === "crt" ? "flicker 7s infinite" : "none",
      }}
    >
      <CRTOverlay />
      <ThemeTransition />
      <ThemeSwitcher />
      <BootSequence onComplete={() => setBooted(true)} />

      <div style={{ opacity: booted ? 1 : 0, transition: "opacity 0.4s ease" }}>
        <CRTNav />

        <div style={{ paddingTop: navHeight }}>
          <CRTTicker />
        </div>

        <CRTHero />

        <Reveal
          as="div"
          className="label-sweep max-w-6xl mx-auto px-6 text-xs tracking-[0.2em] py-2"
          style={{ color: "var(--crt-brown-dim)", borderTop: "1px solid var(--crt-border-col)" }}
        >
          -- LIVE_DESK.SH ----------------------------------------------
        </Reveal>
        <CRTLiveDesk />

        <Reveal
          as="div"
          className="label-sweep max-w-6xl mx-auto px-6 text-xs tracking-[0.2em] py-2"
          style={{ color: "var(--crt-brown-dim)", borderTop: "1px solid var(--crt-border-col)" }}
        >
          -- INTELLIGENCE.EXE ------------------------------------------
        </Reveal>
        <CRTServices />

        <Reveal
          as="div"
          className="label-sweep max-w-6xl mx-auto px-6 text-xs tracking-[0.2em] py-2"
          style={{ color: "var(--crt-brown-dim)", borderTop: "1px solid var(--crt-border-col)" }}
        >
          -- TREASURY_ALLOCATIONS --------------------------------------
        </Reveal>
        <CRTProjects />

        <Reveal
          as="div"
          className="label-sweep max-w-6xl mx-auto px-6 text-xs tracking-[0.2em] py-2"
          style={{ color: "var(--crt-brown-dim)", borderTop: "1px solid var(--crt-border-col)" }}
        >
          -- PROTOCOL.TXT ----------------------------------------------
        </Reveal>
        <CRTAbout />

        <Reveal
          as="div"
          className="label-sweep max-w-6xl mx-auto px-6 text-xs tracking-[0.2em] py-2"
          style={{ color: "var(--crt-brown-dim)", borderTop: "1px solid var(--crt-border-col)" }}
        >
          -- ARCHITECTURE.MAP ------------------------------------------
        </Reveal>
        <CRTArchitecture />

        <Reveal
          as="div"
          className="label-sweep max-w-6xl mx-auto px-6 text-xs tracking-[0.2em] py-2"
          style={{ color: "var(--crt-brown-dim)", borderTop: "1px solid var(--crt-border-col)" }}
        >
          -- ROADMAP.LOG -----------------------------------------------
        </Reveal>
        <CRTRoadmap />

        <CRTFooter />
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <ThemeProvider>
      <SiteContent />
    </ThemeProvider>
  )
}

