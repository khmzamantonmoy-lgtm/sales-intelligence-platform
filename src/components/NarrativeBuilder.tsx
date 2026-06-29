import { useDealStore } from '../stores/useDealStore'

export default function NarrativeBuilder() {
  const narrative = useDealStore((s) => s.deal.narrative)
  const setDeal = useDealStore((s) => s.setDeal)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Narrative Builder</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <p className="text-gray-500 text-sm mb-2">Build your deal narrative</p>
        <textarea className="w-full h-64 border rounded p-3 outline-none resize-none"
          placeholder="Start writing your narrative..."
          value={narrative}
          onChange={(e) => setDeal({ narrative: e.target.value })} />
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
          Generate with AI
        </button>
      </div>
    </div>
  )
}
