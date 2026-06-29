
import { useDealStore } from '../stores/useDealStore'

export default function NavBar() {
  const deal = useDealStore((s) => s.deal)
  const reset = useDealStore((s) => s.resetDeal)

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-md" />
          <span className="font-medium">SIP</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{deal.name}</span>
          <button className="text-sm text-indigo-600" onClick={reset}>Reset Deal</button>
        </div>
      </div>
    </nav>
  )
}
