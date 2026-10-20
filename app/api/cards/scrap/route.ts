import { NextResponse } from 'next/server';
import { rarityRewardValues, scrapValue } from '@/lib/game';

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as {
    card?: { rarity?: keyof typeof rarityRewardValues; id?: string };
  };

  const rarity = body.card?.rarity ?? 'COMMON';
  const value = scrapValue(rarity);

  return NextResponse.json({
    ok: true,
    cardId: body.card?.id ?? 'demo-card',
    rarity,
    scrapValue: value,
    coinsAwarded: value,
    message: 'Card recycled successfully.'
  });
}
