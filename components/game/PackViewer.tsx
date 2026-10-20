import { CreatorCard } from '@/components/game/CreatorCard';

export function PackViewer({ cards }: { cards: Array<{ id: string; creatorName: string; rarity: 'COMMON' | 'UNCOMMON' | 'EPIC' | 'LEGENDARY' | 'ULTIMATE'; subscribers: number; image: string }> }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Pack opener</p>
          <h2 className="text-2xl font-bold text-white">Daily Creator Pack</h2>
        </div>
        <button className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
          Open Pack
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <CreatorCard key={card.id} creatorName={card.creatorName} rarity={card.rarity} subscribers={card.subscribers} image={card.image} />
        ))}
      </div>
    </div>
  );
}
