
import { useDealStore } from '../stores/useDealStore'

export default function RFPIntelligence() {
  const rfpNotes = useDealStore((s) => s.deal.rfpNotes)
  const setDeal = useDealStore((s) => s.setDeal)

  return (
    <section className="p-4 bg-white rounded-md shadow">
      <h2 className="text-lg font-semibold">RFP Intelligence</h2>
      <p className="text-sm text-gray-500">Centralized RFP notes and highlights.</p>
      <textarea
        className="w-full mt-3 border rounded p-2 min-h-[120px]"
        value={rfpNotes}
        onChange={(e) => setDeal({ rfpNotes: e.target.value })}
      />
    </section>
  )
}
