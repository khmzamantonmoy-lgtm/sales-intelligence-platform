import { useState } from 'react'
import NavBar from './components/NavBar'
import DealCommandCenter from './components/DealCommandCenter'
import RFPIntelligence from './components/RFPIntelligence'
import CompetitiveWarRoom from './components/CompetitiveWarRoom'
import ObjectionSimulator from './components/ObjectionSimulator'
import NarrativeBuilder from './components/NarrativeBuilder'

export default function App() {
  const [section, setSection] = useState('Deal Command Center')
  const render = () => {
    if (section === 'RFP Intelligence') return <RFPIntelligence />
    if (section === 'Competitive War Room') return <CompetitiveWarRoom />
    if (section === 'Objection Simulator') return <ObjectionSimulator />
    if (section === 'Narrative Builder') return <NarrativeBuilder />
    return <DealCommandCenter />
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar section={section} setSection={setSection} />
      <main className="max-w-5xl mx-auto py-6">{render()}</main>
    </div>
  )
}
