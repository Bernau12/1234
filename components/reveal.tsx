"use client"

import { useEffect, useRef, useState } from "react"
import type { CSSProperties, ElementType, ReactNode } from "react"

/**
 * Scroll-reveal wrapper. Sets data-inview="true" when the element scrolls
 * into view, letting CSS handle the transition (see globals.css).
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  once = true,
  className,
  style,
}: {
  children: ReactNode
  as?: ElementType
  delay?: number
  once?: boolean
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Fallback for environments without IntersectionObserver
    if (typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) io.unobserve(entry.target)
          } else if (!once) {
            setInView(false)
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref as never}
      className={className}
      data-inview={inView ? "true" : "false"}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
