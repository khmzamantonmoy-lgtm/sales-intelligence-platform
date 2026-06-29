import React, { useState } from 'react'
import useDealStore from '../stores/useDealStore'

export default function ObjectionSimulator() {
  const objections = useDealStore((s) => s.deal.objections)
  const setDeal = useDealStore((s) => s.setDeal)
  const [input, setInput] = useState('')

  function addObjection() {
    if (!input.trim()) return
    setDeal({ objections: [...objections, input.trim()] })
    setInput('')
  }

  return (
    <section className="p-4 bg-white rounded-md shadow">
      <h2 className="text-lg font-semibold">Objection Simulator</h2>
      <p className="text-sm text-gray-500">Practice responses to common objections.</p>
      <div className="mt-3 flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          placeholder="Type objection"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="px-3 py-2 bg-green-600 text-white rounded" onClick={addObjection}>Add</button>
      </div>
      <ul className="mt-3 space-y-2">
        {objections.map((o) => (
          <li key={o} className="p-2 bg-gray-50 rounded">
            <div className="font-medium">{o}</div>
            <div className="text-sm text-gray-600 mt-1">Suggested response: Ask about budget and timeline, then align value.</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
