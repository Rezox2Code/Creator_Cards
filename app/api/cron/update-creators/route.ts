import { NextResponse } from 'next/server';
import { chunkArray, creatorPool, determineMaxRarity } from '@/lib/game';

export async function GET() {
  const updates = creatorPool.map((creator) => ({
    ...creator,
    subscriberCount: creator.subscribers,
    maxRarity: determineMaxRarity(creator.subscribers)
  }));

  return NextResponse.json({
    ok: true,
    processed: updates.length,
    batches: chunkArray(updates, 50).length,
    creators: updates
  });
}

export async function POST() {
  const creators = creatorPool.map((creator) => ({
    id: creator.id,
    name: creator.name,
    subscriberCount: creator.subscribers,
    maxRarity: determineMaxRarity(creator.subscribers)
  }));

  return NextResponse.json({
    ok: true,
    synced: creators.length,
    batches: chunkArray(creators, 50).length,
    creators
  });
}
