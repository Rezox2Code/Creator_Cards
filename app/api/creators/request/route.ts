import { NextResponse } from 'next/server';
import { creatorPool, determineMaxRarity } from '@/lib/game';

function parseChannelId(input: string) {
  const normalized = input.trim();

  if (/^UC[\w-]{22,}$/.test(normalized)) return normalized;
  const match = normalized.match(/youtube\.com\/channel\/([A-Za-z0-9_-]+)/) ?? normalized.match(/@([A-Za-z0-9_-]+)/);
  return match?.[1] ? `@${match[1]}` : normalized;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as {
    channelId?: string;
    url?: string;
  };

  const input = body.channelId ?? body.url ?? '';
  const channelId = parseChannelId(input);
  const creator = creatorPool[0];
  const maxRarity = determineMaxRarity(creator.subscribers);

  return NextResponse.json({
    ok: true,
    source: input || 'demo-request',
    channelId,
    creator: {
      id: creator.id,
      name: creator.name,
      youtubeChannelId: channelId,
      subscriberCount: creator.subscribers,
      maxRarity,
      avatarUrl: creator.avatar
    },
    cardModels: ['COMMON', 'UNCOMMON', 'EPIC', 'LEGENDARY', 'ULTIMATE'].filter((rarity) => {
      const order = ['COMMON', 'UNCOMMON', 'EPIC', 'LEGENDARY', 'ULTIMATE'];
      return order.indexOf(rarity) <= order.indexOf(maxRarity);
    })
  });
}
