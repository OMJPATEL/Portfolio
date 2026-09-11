import StatusRail from './components/StatusRail'
import CursorGlow from './components/CursorGlow'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Services from './components/Services'
import Log from './components/Log'
import Incident from './components/Incident'
import Deployed from './components/Deployed'
import Contact from './components/Contact'
import { useActiveSection } from './hooks/useActiveSection'

const SECTION_IDS = ['hero', 'profile', 'services', 'log', 'incident', 'deployed', 'contact']

export default function App() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <div className="app-shell">
      <CursorGlow />
      <StatusRail active={active} />
      <main className="content">
        <Hero />
        <Profile />
        <Services />
        <Log />
        <Incident />
        <Deployed />
        <Contact />
      </main>
    </div>
  )
}
