import React from 'react'
import './App.css'
import './index.css'
import NavBar from './components/NavBar'
import DealCommandCenter from './components/DealCommandCenter'
import RFPIntelligence from './components/RFPIntelligence'
import CompetitiveWarRoom from './components/CompetitiveWarRoom'
import ObjectionSimulator from './components/ObjectionSimulator'
import NarrativeBuilder from './components/NarrativeBuilder'
import { useDealStore } from './stores/useDealStore'

function App() {
  const deal = useDealStore((s) => s.deal)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <NavBar />
      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">SIP — Sales Intelligence Platform</h1>
            <p className="text-sm text-gray-500">Active deal: {deal.name} • Stage: {deal.stage}</p>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <DealCommandCenter />
            <RFPIntelligence />
            <CompetitiveWarRoom />
          </div>
          <aside className="col-span-1 space-y-6">
            <ObjectionSimulator />
            <NarrativeBuilder />
          </aside>
        </section>
      </main>
    </div>
  )
}

export default App
