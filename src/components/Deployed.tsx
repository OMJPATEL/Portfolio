import { projects } from '../content'
import SectionHeading from './SectionHeading'

export default function Deployed() {
  return (
    <section id="deployed" className="section">
      <SectionHeading kicker="05 / deployed" title="Things I've shipped." />
      <p className="section-lede">Personal and coursework projects, still live on GitHub.</p>

      <div className="deployed-grid">
        {projects.map((p) => (
          <a key={p.name} href={p.href} target="_blank" rel="noreferrer" className="deployed-card">
            <div className="deployed-card-head">
              <span className="status-dot" aria-hidden="true" />
              <h3>{p.name}</h3>
            </div>
            <p className="deployed-desc">{p.description}</p>
            <p className="deployed-highlight">{p.highlight}</p>
            <div className="deployed-stack mono">
              {p.stack.map((s) => (
                <span key={s} className="stack-chip">{s}</span>
              ))}
            </div>
            <div className="deployed-terminal mono" aria-hidden="true">
              <span className="deployed-terminal-prompt">$</span> open repository<span className="deployed-cursor" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
