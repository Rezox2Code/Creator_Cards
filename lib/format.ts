export const rarityStyles = {
  COMMON: 'border-slate-400 bg-slate-200 text-slate-900',
  UNCOMMON: 'border-emerald-400 bg-emerald-500/20 text-emerald-200',
  EPIC: 'border-sky-400 bg-sky-500/20 text-sky-200',
  LEGENDARY: 'border-amber-400 bg-amber-500/20 text-amber-200',
  ULTIMATE: 'border-pink-400 bg-pink-500/20 text-pink-200'
} as const;

export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(value);
}
