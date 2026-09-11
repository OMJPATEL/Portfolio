import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SectionHeading({
  kicker,
  title,
}: {
  kicker: string
  title: string
}) {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapRef.current) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const scan = wrapRef.current.querySelector('.scan-bar')
    const targets = wrapRef.current.querySelectorAll('.scan-target')

    if (reduce) {
      gsap.set(targets, { clipPath: 'inset(0 0% 0 0)' })
      gsap.set(scan, { opacity: 0 })
      return
    }

    gsap.set(targets, { clipPath: 'inset(0 100% 0 0)' })

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      })
      tl.to(targets, {
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.9,
        ease: 'power3.inOut',
        stagger: 0.08,
      })
      tl.fromTo(
        scan,
        { opacity: 1, left: '0%' },
        { left: '100%', duration: 0.9, ease: 'power3.inOut' },
        '<',
      )
      tl.to(scan, { opacity: 0, duration: 0.2 }, '-=0.15')
    }, wrapRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="scan-wrap" ref={wrapRef}>
      <p className="section-kicker mono scan-target">{kicker}</p>
      <h2 className="section-title scan-target">
        {title}
        <span className="scan-bar" aria-hidden="true" />
      </h2>
    </div>
  )
}
