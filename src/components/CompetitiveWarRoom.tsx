import React, { useState } from 'react'
import useDealStore from '../stores/useDealStore'

export default function CompetitiveWarRoom() {
  const competitors = useDealStore((s) => s.deal.competitors)
  const setDeal = useDealStore((s) => s.setDeal)
  const [candidate, setCandidate] = useState('')

  function addCompetitor() {
    if (!candidate.trim()) return
    setDeal({ competitors: [...competitors, candidate.trim()] })
    setCandidate('')
  }

  return (
    <section className="p-4 bg-white rounded-md shadow">
      <h2 className="text-lg font-semibold">Competitive War Room</h2>
      <p className="text-sm text-gray-500">Track competitors and key differentiators.</p>
      <div className="mt-3 flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          placeholder="Add competitor"
          value={candidate}
          onChange={(e) => setCandidate(e.target.value)}
        />
        <button className="px-3 py-2 bg-indigo-600 text-white rounded" onClick={addCompetitor}>Add</button>
      </div>
      <ul className="mt-3 space-y-2">
        {competitors.map((c) => (
          <li key={c} className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
