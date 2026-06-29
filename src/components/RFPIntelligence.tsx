import { useDealStore } from "../stores/useDealStore"
export default function RFPIntelligence() {
  const selectedDeal = useDealStore((s) => s.selectedDeal)
  const setDeal = useDealStore((s) => s.setDeal)
  const deal = selectedDeal()
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-2">RFP Intelligence Engine</h1>
      <p className="text-gray-400 mb-6">Paste RFP content for AI-powered clause extraction and risk analysis</p>
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <div className="text-sm text-gray-400 mb-3">RFP Document Content</div>
        <textarea className="w-full h-64 bg-gray-700 border border-gray-600 rounded-lg p-3 text-sm text-white placeholder-gray-500 outline-none resize-none"
          placeholder="Paste RFP content here..." value={deal.rfpNotes} onChange={(e) => setDeal({ rfpNotes: e.target.value })} />
        <div className="flex gap-3 mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-500">Analyze RFP with AI</button>
          <button className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-700">Mock Mode Preview</button>
        </div>
      </div>
    </div>
  )
}
