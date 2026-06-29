import { useState } from 'react'
import { useDealStore } from '../stores/useDealStore'

export default function CompetitiveWarRoom() {
  const competitors = useDealStore((s) => s.deal.competitors)
  const setDeal = useDealStore((s) => s.setDeal)
  const [name, setName] = useState('')
  const [strength, setStrength] = useState('')
  const add = () => {
    if (!name.trim()) return
    setDeal({ competitors: [...competitors, { name: name.trim(), strength: strength.trim() }] })
    setName(''); setStrength('')
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Competitive War Room</h1>
      <div className="flex gap-2 mb-4">
        <input className="border rounded px-3 py-2 flex-1" placeholder="Competitor name"
          value={name} onChange={(e) => setName(e.target.value)} />
        <input className="border rounded px-3 py-2 flex-1" placeholder="Their strength"
          value={strength} onChange={(e) => setStrength(e.target.value)} />
        <button onClick={add} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </div>
      <ul className="space-y-2">
        {competitors.map((c, i) => (
          <li key={i} className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
            <span className="font-medium">{c.name}</span>
            <span className="text-gray-500 text-sm">{c.strength}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
