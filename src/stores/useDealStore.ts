import { create } from 'zustand'

interface Deal {
  name: string
  stage: string
  value: number
  stakeholders: { name: string; role: string }[]
  competitors: { name: string; strength: string }[]
  objections: { text: string; response: string }[]
  rfpNotes: string
  narrative: string
}

interface DealState {
  deal: Deal
  setDeal: (partial: Partial<Deal>) => void
  resetDeal: () => void
}

const defaultDeal: Deal = {
  name: 'New Deal',
  stage: 'Discovery',
  value: 0,
  stakeholders: [],
  competitors: [],
  objections: [],
  rfpNotes: '',
  narrative: '',
}

export const useDealStore = create<DealState>((set) => ({
  deal: defaultDeal,
  setDeal: (partial) => set((state) => ({ deal: { ...state.deal, ...partial } })),
  resetDeal: () => set({ deal: defaultDeal }),
}))
