
import { useDealStore } from '../stores/useDealStore'

export default function DealCommandCenter() {
  const deal = useDealStore((s) => s.deal)
  const setDeal = useDealStore((s) => s.setDeal)

  return (
    <section className="p-4 bg-white rounded-md shadow">
      <h2 className="text-xl font-semibold mb-2">Deal Command Center</h2>
      <label className="block text-sm text-gray-600">Deal name</label>
      <input
        className="w-full border p-2 rounded mt-1"
        value={deal.name}
        onChange={(e) => setDeal({ name: e.target.value })}
      />

      <label className="block text-sm text-gray-600 mt-3">Stage</label>
      <select
        className="w-full border p-2 rounded mt-1"
        value={deal.stage}
        onChange={(e) => setDeal({ stage: e.target.value })}
      >
        <option>Discovery</option>
        <option>Qualification</option>
        <option>Proposal</option>
        <option>Negotiation</option>
        <option>Closed Won</option>
        <option>Closed Lost</option>
      </select>

      <div className="mt-4">
        <h3 className="font-medium">Stakeholders</h3>
        <div className="flex gap-2 mt-2">
          {deal.stakeholders.map((s) => (
            <span key={s} className="px-2 py-1 bg-gray-100 rounded">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
