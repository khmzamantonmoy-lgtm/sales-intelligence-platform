import { useDealStore } from '../stores/useDealStore'

export default function DealCommandCenter() {
  const deal = useDealStore((s) => s.deal)
  const setDeal = useDealStore((s) => s.setDeal)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Deal Command Center</h1>
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <p className="text-gray-500 text-sm">Deal Name</p>
        <input className="text-xl font-semibold w-full border-b outline-none"
          value={deal.name}
          onChange={(e) => setDeal({ name: e.target.value })} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-500 text-sm">Stage</p>
          <input className="font-medium w-full outline-none"
            value={deal.stage}
            onChange={(e) => setDeal({ stage: e.target.value })} />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-500 text-sm">Value</p>
          <input type="number" className="font-medium w-full outline-none"
            value={deal.value}
            onChange={(e) => setDeal({ value: Number(e.target.value) })} />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <p className="font-semibold mb-2">Stakeholders</p>
        {deal.stakeholders.map((s, i) => (
          <span key={i} className="inline-block px-2 py-1 bg-gray-100 rounded mr-2 mb-2">
            {s.name} — {s.role}
          </span>
        ))}
      </div>
    </div>
  )
}
