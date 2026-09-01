import { AboutSection } from './components/AboutSection'
import { CapabilitiesSection } from './components/CapabilitiesSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { WorkMarqueeSection } from './components/WorkMarqueeSection'
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    if (!window.location.hash) return
    const scrollToHash = () => document.querySelector(window.location.hash)?.scrollIntoView({ block: 'start' })
    const frame = requestAnimationFrame(scrollToHash)
    const timer = window.setTimeout(scrollToHash, 300)
    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <main className="overflow-x-clip bg-ink">
      <HeroSection />
      <WorkMarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CapabilitiesSection />
      <ContactSection />
    </main>
  )
}
