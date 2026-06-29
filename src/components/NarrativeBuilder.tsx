import React from 'react'
import useDealStore from '../stores/useDealStore'

export default function NarrativeBuilder() {
  const narrative = useDealStore((s) => s.deal.narrative)
  const setDeal = useDealStore((s) => s.setDeal)

  function generatePlaceholder() {
    setDeal({ narrative: `We help ${useDealStore.getState().deal.name} achieve outcomes by delivering differentiated value.` })
  }

  return (
    <section className="p-4 bg-white rounded-md shadow">
      <h2 className="text-lg font-semibold">Narrative Builder</h2>
      <p className="text-sm text-gray-500">Craft messaging and one-pagers for the deal.</p>
      <textarea
        className="w-full mt-3 border rounded p-2 min-h-[120px]"
        value={narrative}
        onChange={(e) => setDeal({ narrative: e.target.value })}
      />
      <div className="mt-3 flex gap-2">
        <button className="px-3 py-2 bg-indigo-600 text-white rounded" onClick={generatePlaceholder}>Generate</button>
      </div>
    </section>
  )
}
