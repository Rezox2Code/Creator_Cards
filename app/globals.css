import { AuctionHouse } from '@/components/game/AuctionHouse';
import { CreatorCard } from '@/components/game/CreatorCard';
import { NetworkDashboard } from '@/components/game/NetworkDashboard';
import { PackViewer } from '@/components/game/PackViewer';

const featuredCards = [
  { id: '1', creatorName: 'MrBeast', rarity: 'ULTIMATE', subscribers: 240000000, image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=400&q=80' },
  { id: '2', creatorName: 'PewDiePie', rarity: 'LEGENDARY', subscribers: 111000000, image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80' },
  { id: '3', creatorName: 'DanTDM', rarity: 'EPIC', subscribers: 27200000, image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80' }
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">Creator Cards Tycoon</p>
              <h1 className="text-4xl font-black md:text-6xl">Build the ultimate creator empire.</h1>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-sm text-slate-300">
              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4">
                <div className="text-2xl font-bold text-cyan-400">1,284</div>
                <div>Cards</div>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4">
                <div className="text-2xl font-bold text-emerald-400">4.8k</div>
                <div>Coins</div>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4">
                <div className="text-2xl font-bold text-amber-400">18</div>
                <div>Network XP</div>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <PackViewer cards={featuredCards} />
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">Collection filters</h2>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between rounded-2xl bg-slate-800 p-3"><span>Rarity</span><span>All</span></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-800 p-3"><span>Creator tier</span><span>Elite</span></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-800 p-3"><span>Custom tags</span><span>Featured</span></div>
              <div className="mt-6 rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-4 text-cyan-200">
                Pro tip: card tags let you sort by “viral”, “benchmark”, or “hype” for fast scouting.
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <AuctionHouse />
          <NetworkDashboard />
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {featuredCards.map((card) => (
            <CreatorCard
              key={card.id}
              creatorName={card.creatorName}
              rarity={card.rarity}
              subscribers={card.subscribers}
              image={card.image}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
