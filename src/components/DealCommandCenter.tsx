import { useState } from "react"
import { useDealStore } from "../stores/useDealStore"

const TABS = ["Stakeholders Map", "Action Plan", "Strategic Insights"]
const STAGES = ["Discovery", "Qualification", "Proposal", "Negotiation", "Closed Won", "Closed Lost"]

export default function DealCommandCenter() {
  const deal = useDealStore((s) => s.deal)
  const setDeal = useDealStore((s) => s.setDeal)
  const [tab, setTab] = useState("Stakeholders Map")
  const [ns, setNs] = useState({ name: "", role: "", sentiment: "Neutral" })

  return (
    <div>
      <div className="border-b border-gray-700 p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <span className="text-xs bg-blue-900 text-blue-300 px-2 py-0.5 rounded mb-2 inline-block">ACTIVE DEAL CONTEXT</span>
            <input
              className="block text-2xl font-bold text-white bg-transparent outline-none w-full border-b border-transparent hover:border-gray-600 focus:border-blue-500 transition-colors"
              value={deal.name}
              onChange={(e) => setDeal({ name: e.target.value })}
              placeholder="Deal name..."
            />
            <input
              className="block text-gray-400 text-sm bg-transparent outline-none w-full mt-1 border-b border-transparent hover:border-gray-700 focus:border-gray-500 transition-colors"
              value={deal.description}
              placeholder="Add deal description..."
              onChange={(e) => setDeal({ description: e.target.value })}
            />
          </div>
          <button className="ml-4 px-3 py-1.5 text-sm bg-blue-600 rounded-lg text-white hover:bg-blue-500">+ New Deal</button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">OPPORTUNITY VALUE</div>
            <div className="flex items-center gap-1">
              <span className="text-green-400 text-lg font-bold">$</span>
              <input
                type="number"
                className="text-green-400 text-lg font-bold bg-transparent outline-none w-full"
                value={deal.value}
                onChange={(e) => setDeal({ value: Number(e.target.value) })}
              />
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">CURRENT STAGE</div>
            <select
              className="text-blue-400 text-lg font-bold bg-transparent outline-none w-full cursor-pointer"
              value={deal.stage}
              onChange={(e) => setDeal({ stage: e.target.value })}
            >
              {STAGES.map((s) => <option key={s} value={s} className="bg-gray-800 text-white">{s}</option>)}
            </select>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">CLOSE DATE</div>
            <input
              type="date"
              className="text-white text-sm font-bold bg-transparent outline-none w-full"
              value={deal.closeDate}
              onChange={(e) => setDeal({ closeDate: e.target.value })}
            />
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">STAKEHOLDERS</div>
            <div className="text-blue-400 text-lg font-bold">{deal.stakeholders.length} Active</div>
          </div>
        </div>
      </div>

      <div className="flex border-b border-gray-700 px-6">
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={"px-4 py-3 text-sm font-medium border-b-2 transition-colors " + (tab === t ? "border-blue-500 text-blue-400" : "border-transparent text-gray-500 hover:text-gray-300")}>
            {t}
          </button>
        ))}
      </div>

      <div className="p-6">
        {tab === "Stakeholders Map" && (
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Account Stakeholders & Influencers</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {deal.stakeholders.map((s, i) => (
                <div key={i} className="bg-gray-800 border border-gray-700 rounded-xl p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-white">{s.name}</div>
                      <div className="text-blue-400 text-sm">{s.role}</div>
                    </div>
                    <span className={"text-xs px-2 py-1 rounded-full " + (s.sentiment === "Champion" ? "bg-green-900 text-green-300" : s.sentiment === "Supportive" ? "bg-blue-900 text-blue-300" : "bg-gray-700 text-gray-300")}>
                      {s.sentiment}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
              <div className="text-sm text-gray-400 mb-3">Register Stakeholder</div>
              <div className="flex gap-2">
                <input className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none" placeholder="Name" value={ns.name} onChange={(e) => setNs({...ns, name: e.target.value})} />
                <input className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none" placeholder="Role" value={ns.role} onChange={(e) => setNs({...ns, role: e.target.value})} />
                <select className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white outline-none" value={ns.sentiment} onChange={(e) => setNs({...ns, sentiment: e.target.value})}>
                  <option>Champion</option><option>Supportive</option><option>Neutral</option><option>Skeptic</option>
                </select>
                <button onClick={() => { if (!ns.name) return; setDeal({ stakeholders: [...deal.stakeholders, ns] }); setNs({ name: "", role: "", sentiment: "Neutral" }) }} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-500">Add</button>
              </div>
            </div>
          </div>
        )}
        {tab === "Action Plan" && (
          <div className="text-center py-16 text-gray-500">Action Plan — coming in next update</div>
        )}
        {tab === "Strategic Insights" && (
          <div className="text-center py-16 text-gray-500">Strategic Insights — coming in next update</div>
        )}
      </div>
    </div>
  )
}