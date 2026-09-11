import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience, additionalExperience } from '../content'
import SectionHeading from './SectionHeading'

gsap.registerPlugin(ScrollTrigger)

export default function Log() {
  const trackRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!trackRef.current || !lineRef.current) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      gsap.set(lineRef.current, { scaleY: 1 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.set(lineRef.current, { scaleY: 0, transformOrigin: 'top' })
      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: 0.6,
        },
      })

      gsap.utils.toArray<HTMLElement>('.log-entry').forEach((entry) => {
        gsap.fromTo(
          entry,
          { opacity: 0.25 },
          {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: entry,
              start: 'top 78%',
              end: 'top 45%',
              scrub: 0.4,
            },
          },
        )
      })
    }, trackRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="log" className="section">
      <SectionHeading kicker="03 / activity log" title="Where I've worked." />
      <p className="section-lede">Roles in reverse chronological order, logged like an incident timeline.</p>

      <div className="log-track" ref={trackRef}>
        <div className="log-line-bg" aria-hidden="true" />
        <div className="log-line-fill" ref={lineRef} aria-hidden="true" />

        {experience.map((entry) => (
          <article key={entry.id} className="log-entry">
            <div className="log-entry-marker mono">
              <svg className="pulse-line" viewBox="0 0 64 16" aria-hidden="true">
                <polyline points="0,8 14,8 19,2 24,14 29,8 64,8" />
              </svg>
              {entry.period}
            </div>
            <div className="log-entry-body">
              <h3 className="log-entry-role">{entry.role}</h3>
              <p className="log-entry-org mono">{entry.org} · {entry.location}</p>
              <p className="log-entry-summary">{entry.summary}</p>
              <ul className="log-entry-details">
                {entry.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="log-additional">
        <p className="log-additional-title mono">also on file</p>
        {additionalExperience.map((a) => (
          <p key={a.role} className="log-additional-row">
            <span>{a.role} — {a.org}</span>
            <span className="mono muted">{a.period}</span>
          </p>
        ))}
      </div>
    </section>
  )
}
