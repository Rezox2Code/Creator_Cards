export function AuctionHouse() {
  const auctions = [
    { id: 'a1', item: 'MrBeast - Epic', price: 1800, endsIn: '2h 12m', bidders: 14 },
    { id: 'a2', item: 'PewDiePie - Legendary', price: 4200, endsIn: '5h 00m', bidders: 9 },
    { id: 'a3', item: 'DanTDM - Uncommon', price: 680, endsIn: '16m', bidders: 4 }
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Auction House</h2>
        <button className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-200">Create Listing</button>
      </div>

      <div className="space-y-3">
        {auctions.map((auction) => (
          <div key={auction.id} className="rounded-2xl border border-slate-700 bg-slate-800 p-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-100">{auction.item}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{auction.endsIn}</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
              <span>Current bid</span>
              <span className="text-lg font-bold text-amber-400">{auction.price}</span>
            </div>
            <div className="mt-1 text-xs text-slate-400">{auction.bidders} bidders active</div>
          </div>
        ))}
      </div>
    </div>
  );
}
