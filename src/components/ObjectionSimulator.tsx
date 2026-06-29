import { useState } from "react"
export default function ObjectionSimulator() {
  const [input, setInput] = useState("")
  const objections = ["Your price is too high","We already have a solution","We need to think about it","Your timeline is too long"]
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-2">Objection Simulator</h1>
      <p className="text-gray-400 mb-6">Practice handling sales objections with AI feedback</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {objections.map((o) => (
          <div key={o} className="bg-gray-800 border border-gray-700 rounded-xl p-4 cursor-pointer hover:border-blue-500 transition-colors" onClick={() => setInput(o)}>
            <div className="text-white text-sm font-medium">{o}</div>
            <div className="text-gray-500 text-xs mt-1">Click to practice</div>
          </div>
        ))}
      </div>
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <div className="text-sm text-gray-400 mb-3">Your Response</div>
        <textarea className="w-full h-32 bg-gray-700 border border-gray-600 rounded-lg p-3 text-sm text-white placeholder-gray-500 outline-none resize-none"
          placeholder="Type your response to the objection..." value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-500">Grade My Response with AI</button>
      </div>
    </div>
  )
}