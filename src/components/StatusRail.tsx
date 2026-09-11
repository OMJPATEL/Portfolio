import { useClock } from '../hooks/useClock'

const NAV = [
  { id: 'hero', label: 'Status' },
  { id: 'profile', label: 'Profile' },
  { id: 'services', label: 'Services' },
  { id: 'log', label: 'Log' },
  { id: 'incident', label: 'Incident' },
  { id: 'deployed', label: 'Deployed' },
  { id: 'contact', label: 'Contact' },
]

export default function StatusRail({ active }: { active: string }) {
  const time = useClock()
  const timeStr = time.toLocaleTimeString('en-CA', { hour12: false })

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside className="rail">
      <div className="rail-top">
        <span className="rail-dot" aria-hidden="true" />
        <span className="rail-clock mono">{timeStr}</span>
      </div>

      <nav className="rail-nav" aria-label="Section navigation">
        {NAV.map((item) => (
          <button
            key={item.id}
            className={`rail-item ${active === item.id ? 'is-active' : ''}`}
            onClick={() => scrollTo(item.id)}
            aria-current={active === item.id}
          >
            <span className="rail-item-mark mono">{active === item.id ? '●' : '○'}</span>
            <span className="rail-item-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="rail-bottom mono">WPG-MB</div>
    </aside>
  )
}
