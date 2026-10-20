import React from 'react';

const rarityStyles = {
  COMMON: 'border-slate-400 bg-slate-200 text-slate-900',
  UNCOMMON: 'border-emerald-400 bg-emerald-500/20 text-emerald-200',
  EPIC: 'border-sky-400 bg-sky-500/20 text-sky-200',
  LEGENDARY: 'border-amber-400 bg-amber-500/20 text-amber-200',
  ULTIMATE: 'border-pink-400 bg-pink-500/20 text-pink-200'
} as const;

export function CreatorCard({
  creatorName,
  rarity,
  subscribers,
  image
}: {
  creatorName: string;
  rarity: keyof typeof rarityStyles;
  subscribers: number;
  image: string;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl shadow-slate-950/20">
      <div className="h-36 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-white">{creatorName}</h3>
          <span className={`rounded-full border px-2 py-1 text-[10px] font-bold uppercase ${rarityStyles[rarity]}`}>
            {rarity}
          </span>
        </div>

        <div className="text-sm text-slate-300">
          {new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(subscribers)} subs
        </div>
      </div>
    </article>
  );
}
