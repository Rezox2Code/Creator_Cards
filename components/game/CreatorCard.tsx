import { formatCompactNumber, rarityStyles } from '@/lib/format';

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

        <div className="text-sm text-slate-300">{formatCompactNumber(subscribers)} subs</div>
      </div>
    </article>
  );
}
