import { useDealStore } from '../stores/useDealStore'
const sections = ['Deal Command Center','RFP Intelligence','Competitive War Room','Objection Simulator','Narrative Builder']
interface Props { section: string; setSection: (s: string) => void }
export default function NavBar({ section, setSection }: Props) {
  const deal = useDealStore((s) => s.deal)
  const reset = useDealStore((s) => s.resetDeal)
  return (
    <div className="flex h-screen w-56 flex-col bg-gray-900 border-r border-gray-700 fixed left-0 top-0">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">S</div>
          <div><div className="font-bold text-white text-sm">Sales Intelligence</div><div className="text-gray-400 text-xs">SIP Enterprise</div></div>
        </div>
      </div>
      <div className="p-3 border-b border-gray-700">
        <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Selected Deal</div>
        <div className="bg-gray-800 rounded-lg p-2">
          <div className="text-white text-sm font-medium truncate">{deal.name}</div>
          <div className="text-blue-400 text-xs">${deal.value.toLocaleString()} | {deal.stage}</div>
        </div>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {sections.map((s) => (
          <button key={s} onClick={() => setSection(s)}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${section === s ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"}`}>
            {s}
          </button>
        ))}
      </nav>
      <div className="p-3 border-t border-gray-700">
        <button onClick={reset} className="w-full text-xs text-gray-500 hover:text-gray-300 py-1">Reset Deal</button>
      </div>
    </div>
  )
}