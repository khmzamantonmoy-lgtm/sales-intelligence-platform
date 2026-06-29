import { useState } from 'react'
import { useDealStore } from '../stores/useDealStore'

export default function ObjectionSimulator() {
  const objections = useDealStore((s) => s.deal.objections)
  const setDeal = useDealStore((s) => s.setDeal)
  const [text, setText] = useState('')
  const add = () => {
    if (!text.trim()) return
    setDeal({ objections: [...objections, { text: text.trim(), response: '' }] })
    setText('')
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Objection Simulator</h1>
      <div className="flex gap-2 mb-4">
        <input className="border rounded px-3 py-2 flex-1" placeholder="Enter objection..."
          value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={add} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </div>
      <ul className="space-y-2">
        {objections.map((o, i) => (
          <li key={i} className="p-3 bg-white rounded-lg shadow">
            <div className="font-medium">{o.text}</div>
            {o.response && <div className="text-gray-500 text-sm mt-1">{o.response}</div>}
          </li>
        ))}
      </ul>
    </div>
  )
}
