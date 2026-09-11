import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { identity } from '../content'
import HeroBackground from './HeroBackground'

const CHECKS = [
  'checking infrastructure monitoring… ok',
  'checking identity & access… ok',
  'checking application layer… ok',
  'checking incident history… ok',
]

export default function Hero() {
  const checksRef = useRef<HTMLDivElement>(null)
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkLines = checksRef.current?.querySelectorAll('.check-line')
    if (!checkLines) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      gsap.set(checkLines, { opacity: 1 })
      gsap.set(revealRef.current, { opacity: 1, y: 0 })
      return
    }

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.set(checkLines, { opacity: 0, x: -6 })
    tl.set(revealRef.current, { opacity: 0, y: 14 })
    tl.to(checkLines, {
      opacity: 1,
      x: 0,
      duration: 0.35,
      stagger: 0.28,
    })
    tl.to(
      checksRef.current,
      { opacity: 0, duration: 0.4, delay: 0.35 },
      '+=0.1',
    )
    tl.to(
      revealRef.current,
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      '<',
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section id="hero" className="section hero">
      <HeroBackground />
      <div ref={checksRef} className="boot-checks mono" aria-hidden="true">
        {CHECKS.map((line) => (
          <div key={line} className="check-line">
            {line}
          </div>
        ))}
      </div>

      <div ref={revealRef} className="hero-reveal">
        <p className="eyebrow mono">system status</p>
        <h1 className="hero-name">{identity.name}</h1>
        <p className="hero-tagline">{identity.tagline}</p>
        <p className="hero-summary">{identity.summary}</p>
        <div className="hero-badge">
          <span className="pulse-dot" aria-hidden="true" />
          <span className="mono">all systems operational</span>
        </div>
      </div>
    </section>
  )
}
