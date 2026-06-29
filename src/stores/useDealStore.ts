import { create } from "zustand"
interface Stakeholder { name: string; role: string; sentiment: string }
interface Deal {
  name: string; stage: string; value: number; description: string; closeDate: string
  stakeholders: Stakeholder[]; rfpNotes: string; narrative: string
}
interface DealState {
  deal: Deal
  setDeal: (p: Partial<Deal>) => void
  resetDeal: () => void
}
const def: Deal = { name: "New Deal", stage: "Discovery", value: 0, description: "", closeDate: "", stakeholders: [], rfpNotes: "", narrative: "" }
export const useDealStore = create<DealState>((set) => ({
  deal: def,
  setDeal: (p) => set((s) => ({ deal: { ...s.deal, ...p } })),
  resetDeal: () => set({ deal: def }),
}))