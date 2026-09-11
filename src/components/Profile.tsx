import { identity, education, certifications } from '../content'
import SectionHeading from './SectionHeading'

export default function Profile() {
  return (
    <section id="profile" className="section">
      <SectionHeading kicker="01 / profile" title="Support that scales into software." />
      <p className="section-lede">
        I started on the support side — tickets, monitoring dashboards, the 2am page — and moved toward building
        the applications those tickets were about. That's the throughline: {identity.location}-based, comfortable
        being the first call when something breaks, and just as comfortable being the one who shipped it.
      </p>

      <div className="profile-grid">
        <div className="profile-block">
          <h3 className="profile-block-title">Education</h3>
          <p className="profile-block-main">{education.degree}</p>
          <p className="profile-block-sub">{education.school} · {education.period}</p>
          <p className="profile-block-detail">{education.detail}</p>
        </div>
        <div className="profile-block">
          <h3 className="profile-block-title">Certifications</h3>
          <ul className="profile-list">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
