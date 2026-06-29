import { useDealStore } from "../stores/useDealStore"

const sections = ["Deal Command Center","RFP Intelligence","Competitive War Room","Objection Simulator","Narrative Builder"]

interface Props { section: string; setSection: (s: string) => void }

export default function NavBar({ section, setSection }: Props) {
  const deals = useDealStore((s) => s.deals)
  const activeDealId = useDealStore((s) => s.activeDealId)
  const selectedDeal = useDealStore((s) => s.selectedDeal)
  const addDeal = useDealStore((s) => s.addDeal)
  const switchDeal = useDealStore((s) => s.switchDeal)
  const resetAll = useDealStore((s) => s.resetAll)
  const deal = selectedDeal()

  return (
    <div className="flex h-screen w-56 flex-col bg-gray-900 border-r border-gray-700 fixed left-0 top-0 overflow-y-auto">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">S</div>
          <div>
            <div className="font-bold text-white text-sm">Sales Intelligence</div>
            <div className="text-gray-400 text-xs">SIP Enterprise</div>
          </div>
        </div>
      </div>

      <div className="p-3 border-b border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <div className="text-gray-400 text-xs uppercase tracking-wider">Deals</div>
          <button onClick={addDeal} className="text-blue-400 text-xs hover:text-blue-300 font-medium">+ New</button>
        </div>
        <div className="space-y-1">
          {deals.map((d) => (
            <button key={d.id} onClick={() => switchDeal(d.id)}
              className={"w-full text-left rounded-lg p-2 transition-colors " + (d.id === activeDealId ? "bg-blue-900 border border-blue-700" : "hover:bg-gray-800")}>
              <div className={"text-sm font-medium truncate " + (d.id === activeDealId ? "text-white" : "text-gray-300")}>{d.name}</div>
              <div className={"text-xs " + (d.id === activeDealId ? "text-blue-300" : "text-gray-500")}>${d.value.toLocaleString()} | {d.stage}</div>
            </button>
          ))}
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {sections.map((s) => (
          <button key={s} onClick={() => setSection(s)}
            className={"w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors " + (section === s ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white")}>
            {s}
          </button>
        ))}
      </nav>

      <div className="p-3 border-t border-gray-700">
        <div className="text-gray-500 text-xs truncate mb-1">{deal.name}</div>
        <button onClick={resetAll} className="w-full text-xs text-gray-500 hover:text-gray-300 py-1">Reset All</button>
      </div>
    </div>
  )
}
