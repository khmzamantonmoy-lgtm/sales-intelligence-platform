import { useDealStore } from "../stores/useDealStore"
export default function NarrativeBuilder() {
  const narrative = useDealStore((s) => s.deal.narrative)
  const setDeal = useDealStore((s) => s.setDeal)
  const templates = ["Executive Summary","Sales Email","TCO Business Case","Champion Pitch"]
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-2">Narrative Builder</h1>
      <p className="text-gray-400 mb-6">Generate compelling deal narratives with AI</p>
      <div className="grid grid-cols-4 gap-3 mb-6">
        {templates.map((t) => (
          <button key={t} className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-left hover:border-blue-500 transition-colors">
            <div className="text-white text-sm font-medium">{t}</div>
          </button>
        ))}
      </div>
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <div className="text-sm text-gray-400 mb-3">Generated Narrative</div>
        <textarea className="w-full h-64 bg-gray-700 border border-gray-600 rounded-lg p-3 text-sm text-white placeholder-gray-500 outline-none resize-none"
          placeholder="Select a template above or start writing..." value={narrative} onChange={(e) => setDeal({ narrative: e.target.value })} />
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-500">Generate with AI</button>
      </div>
    </div>
  )
}