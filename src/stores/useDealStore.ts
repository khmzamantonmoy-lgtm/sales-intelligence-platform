import { create } from 'zustand'

interface Stakeholder { name: string; role: string; sentiment: string }
interface Competitor { name: string; strength: string }
interface Objection { text: string; response: string }

interface Deal {
  name: string; stage: string; value: number; description: string; closeDate: string
  stakeholders: Stakeholder[]; competitors: Competitor[]; objections: Objection[]
  rfpNotes: string; narrative: string
}

interface DealState {
  deal: Deal
  setDeal: (partial: Partial<Deal>) => void
  resetDeal: () => void
}

const defaultDeal: Deal = {
  name: 'New Deal', stage: 'Discovery', value: 0, description: '', closeDate: '',
  stakeholders: [], competitors: [], objections: [], rfpNotes: '', narrative: '',
}

export const useDealStore = create<DealState>((set) => ({
  deal: defaultDeal,
  setDeal: (partial) => set((state) => ({ deal: { ...state.deal, ...partial } })),
  resetDeal: () => set({ deal: defaultDeal }),
}))
