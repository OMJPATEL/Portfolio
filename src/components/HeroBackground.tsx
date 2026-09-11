export default function HeroBackground() {
  return (
    <svg className="hero-bg" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="dotgrid" width="34" height="34" patternUnits="userSpaceOnUse">
          <circle cx="1.4" cy="1.4" r="1.4" fill="var(--line)" />
        </pattern>
      </defs>
      <rect width="1000" height="700" fill="url(#dotgrid)" />

      <g className="circuit-lines">
        <path d="M 60 620 H 340 V 480 H 620 V 560 H 940" className="circuit-path circuit-1" />
        <path d="M 940 120 H 700 V 260 H 420 V 180 H 120" className="circuit-path circuit-2" />
        <path d="M 500 40 V 200 H 780 V 400" className="circuit-path circuit-3" />
      </g>

      <g className="circuit-nodes">
        <circle cx="340" cy="620" r="4" />
        <circle cx="620" cy="480" r="4" />
        <circle cx="940" cy="560" r="4" />
        <circle cx="700" cy="120" r="4" />
        <circle cx="420" cy="260" r="4" />
        <circle cx="120" cy="180" r="4" />
        <circle cx="780" cy="200" r="4" />
      </g>
    </svg>
  )
}
