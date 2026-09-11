import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { incident } from '../content'
import SectionHeading from './SectionHeading'

gsap.registerPlugin(ScrollTrigger)

export default function Incident() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    if (!trackRef.current) return
    const steps = gsap.utils.toArray<HTMLElement>('.incident-step', trackRef.current)
    const triggers = steps.map((step, i) =>
      ScrollTrigger.create({
        trigger: step,
        start: 'top 55%',
        end: 'bottom 55%',
        onEnter: () => setActiveStep(i),
        onEnterBack: () => setActiveStep(i),
      }),
    )
    return () => triggers.forEach((t) => t.kill())
  }, [])

  return (
    <section id="incident" className="section">
      <SectionHeading kicker="04 / postmortem" title={incident.title} />
      <p className="section-lede">{incident.intro}</p>

      <div className="incident-layout" ref={trackRef}>
        <div className="incident-diagram" aria-hidden="true">
          <svg viewBox="0 0 200 320" className="trace-svg">
            <line x1="100" y1="10" x2="100" y2="310" className="trace-spine" />
            {incident.steps.map((_, i) => {
              const y = 30 + i * 88
              return (
                <g key={i}>
                  <circle
                    cx="100"
                    cy={y}
                    r="8"
                    className={`trace-node ${i <= activeStep ? 'is-active' : ''}`}
                  />
                  {i === activeStep && (
                    <circle cx="100" cy={y} r="14" className="trace-node-pulse" />
                  )}
                </g>
              )
            })}
          </svg>
        </div>

        <div className="incident-steps">
          {incident.steps.map((step, i) => (
            <div key={step.label} className={`incident-step ${i === activeStep ? 'is-active' : ''}`}>
              <p className="incident-step-index mono">hop {i + 1}</p>
              <h3 className="incident-step-label">{step.label}</h3>
              <p className="incident-step-detail">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
