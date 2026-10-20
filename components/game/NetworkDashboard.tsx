export function NetworkDashboard() {
  const network = {
    name: 'Viral Syndicate',
    level: 12,
    xp: 840,
    members: 18,
    quests: [
      { step: 1, target: 80, current: 80, label: 'Collect 80 creator cards' },
      { step: 2, target: 150, current: 120, label: 'Reach 150 network XP' },
      { step: 3, target: 10, current: 6, label: 'Open 10 packs' }
    ]
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Network</p>
          <h2 className="text-2xl font-bold text-white">{network.name}</h2>
        </div>
        <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-sm text-violet-200">Lvl {network.level}</span>
      </div>

      <div className="mb-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-800 p-4">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Members</div>
          <div className="mt-2 text-3xl font-black text-cyan-400">{network.members}</div>
        </div>
        <div className="rounded-2xl bg-slate-800 p-4">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">XP</div>
          <div className="mt-2 text-3xl font-black text-emerald-400">{network.xp}</div>
        </div>
      </div>

      <div className="space-y-3">
        {network.quests.map((quest) => (
          <div key={quest.step} className="rounded-2xl border border-slate-700 bg-slate-800 p-3">
            <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
              <span>Quest {quest.step}</span>
              <span>{quest.current}/{quest.target}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-700">
              <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${Math.min(100, (quest.current / quest.target) * 100)}%` }} />
            </div>
            <div className="mt-2 text-xs text-slate-400">{quest.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
