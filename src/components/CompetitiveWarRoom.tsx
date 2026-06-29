import { useState } from "react"
import { useDealStore } from "../stores/useDealStore"
export default function CompetitiveWarRoom() {
  const [name, setName] = useState("")
  const [strength, setStrength] = useState("")
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-2">Competitive War Room</h1>
      <p className="text-gray-400 mb-6">Track competitors and build defensive strategies</p>
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <div className="text-sm text-gray-400 mb-3">Add Competitor</div>
        <div className="flex gap-2">
          <input className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none" placeholder="Competitor name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none" placeholder="Their key strength" value={strength} onChange={(e) => setStrength(e.target.value)} />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-500">Add</button>
        </div>
        <button className="mt-4 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-700">Generate Defense Strategy with AI</button>
      </div>
    </div>
  )
}