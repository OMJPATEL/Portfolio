import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || reduce || !ref.current) return

    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const tick = () => {
      x += (tx - x) * 0.08
      y += (ty - y) * 0.08
      if (ref.current) {
        ref.current.style.setProperty('--glow-x', `${x}px`)
        ref.current.style.setProperty('--glow-y', `${y}px`)
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
