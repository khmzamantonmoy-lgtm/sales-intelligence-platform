import { useDealStore } from '../stores/useDealStore'

interface NavBarProps { section: string; setSection: (s: string) => void }

export default function NavBar({ section, setSection }: NavBarProps) {
  const deal = useDealStore((s) => s.deal)
  const reset = useDealStore((s) => s.resetDeal)
  const sections = ['Deal Command Center','RFP Intelligence','Competitive War Room','Objection Simulator','Narrative Builder']
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg">SIP</span>
        <span className="text-gray-400 text-sm">| {deal.name}</span>
      </div>
      <div className="flex gap-1">
        {sections.map((s) => (
          <button key={s} onClick={() => setSection(s)}
            className={`px-3 py-1.5 rounded text-sm ${section === s ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            {s}
          </button>
        ))}
      </div>
      <button onClick={reset} className="text-sm text-gray-400 hover:text-white">Reset</button>
    </nav>
  )
}
