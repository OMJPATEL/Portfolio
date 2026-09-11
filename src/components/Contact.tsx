import { identity } from '../content'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionHeading kicker="06 / contact" title="Let's talk." />
      <p className="section-lede">
        Open to IT support, systems administration, and infrastructure roles — and happy to talk through a
        dev-focused opportunity too.
      </p>

      <div className="contact-grid mono">
        <a href={`mailto:${identity.email}`} className="contact-row">
          <span>email</span>
          <span>{identity.email}</span>
        </a>
        <a href={`tel:${identity.phone.replace(/[^\d+]/g, '')}`} className="contact-row">
          <span>phone</span>
          <span>{identity.phone}</span>
        </a>
        <a href={identity.linkedin} target="_blank" rel="noreferrer" className="contact-row">
          <span>linkedin</span>
          <span>patelom29</span>
        </a>
        <a href={identity.github} target="_blank" rel="noreferrer" className="contact-row">
          <span>github</span>
          <span>OMJPATEL</span>
        </a>
      </div>

      <p className="footer-note mono muted">{identity.location} · uptime since 2026</p>
    </section>
  )
}
