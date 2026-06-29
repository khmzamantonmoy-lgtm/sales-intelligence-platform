import { useDealStore } from '../stores/useDealStore'

export default function RFPIntelligence() {
  const rfpNotes = useDealStore((s) => s.deal.rfpNotes)
  const setDeal = useDealStore((s) => s.setDeal)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">RFP Intelligence Engine</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <p className="text-gray-500 text-sm mb-2">Paste RFP text for analysis</p>
        <textarea className="w-full h-64 border rounded p-3 outline-none resize-none"
          placeholder="Paste RFP content here..."
          value={rfpNotes}
          onChange={(e) => setDeal({ rfpNotes: e.target.value })} />
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
          Analyze RFP (AI)
        </button>
      </div>
    </div>
  )
}
