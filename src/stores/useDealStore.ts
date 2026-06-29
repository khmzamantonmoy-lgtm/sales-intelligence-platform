import { create } from "zustand"

interface Stakeholder { name: string; role: string; sentiment: string }

export interface Deal {
  id: string; name: string; stage: string; value: number
  description: string; closeDate: string
  stakeholders: Stakeholder[]; rfpNotes: string; narrative: string
}

interface DealState {
  deals: Deal[]
  activeDealId: string
  selectedDeal: () => Deal
  setDeal: (p: Partial<Deal>) => void
  addDeal: () => void
  switchDeal: (id: string) => void
  resetAll: () => void
}

const newDeal = (id: string, name: string): Deal => ({
  id, name, stage: "Discovery", value: 0, description: "",
  closeDate: "", stakeholders: [], rfpNotes: "", narrative: ""
})

const d1 = newDeal("deal-1", "New Deal")

export const useDealStore = create<DealState>((set, get) => ({
  deals: [d1],
  activeDealId: "deal-1",
  selectedDeal: () => get().deals.find((d) => d.id === get().activeDealId) || get().deals[0],
  setDeal: (p) => set((s) => ({
    deals: s.deals.map((d) => d.id === s.activeDealId ? { ...d, ...p } : d)
  })),
  addDeal: () => {
    const id = "deal-" + Date.now()
    const deal = newDeal(id, "New Deal " + (get().deals.length + 1))
    set((s) => ({ deals: [...s.deals, deal], activeDealId: id }))
  },
  switchDeal: (id) => set({ activeDealId: id }),
  resetAll: () => { const d = newDeal("deal-1", "New Deal"); set({ deals: [d], activeDealId: "deal-1" }) }
}))
