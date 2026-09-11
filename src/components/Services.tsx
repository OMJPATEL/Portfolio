import { services } from '../content'
import SectionHeading from './SectionHeading'

export default function Services() {
  return (
    <section id="services" className="section">
      <SectionHeading kicker="02 / services monitored" title="What's running." />
      <p className="section-lede">
        The tools and platforms I use daily, grouped the way a monitoring dashboard would group them.
      </p>

      <div className="services-grid">
        {services.map((cat) => (
          <div key={cat.label} className="service-card">
            <div className="service-card-head">
              <span className="status-dot" aria-hidden="true" />
              <h3 className="service-card-title">{cat.label}</h3>
            </div>
            <ul className="service-card-list mono">
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
