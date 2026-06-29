import create from 'zustand'

export type Deal = {
  id: string
  name: string
  stage: string
  stakeholders: string[]
  rfpNotes: string
  competitors: string[]
  objections: string[]
  narrative: string
}

type DealState = {
  deal: Deal
  setDeal: (partial: Partial<Deal>) => void
  resetDeal: () => void
}

const defaultDeal: Deal = {
  id: 'deal-1',
  name: 'New Strategic Deal',
  stage: 'Discovery',
  stakeholders: [],
  rfpNotes: '',
  competitors: [],
  objections: [],
  narrative: '',
}

export const useDealStore = create<DealState>((set) => ({
  deal: defaultDeal,
  setDeal: (partial) => set((state) => ({ deal: { ...state.deal, ...partial } })),
  resetDeal: () => set({ deal: defaultDeal }),
}))

export default useDealStore
