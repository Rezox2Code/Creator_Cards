import { NextResponse } from 'next/server';
import { chunkArray, creatorPool, determineMaxRarity } from '@/lib/game';

export async function GET() {
  const creators = creatorPool.map((creator) => ({
    id: creator.id,
    name: creator.name,
    subscriberCount: creator.subscribers,
    maxRarity: determineMaxRarity(creator.subscribers)
  }));

  const batches = chunkArray(creators, 50);

  return NextResponse.json({
    ok: true,
    processed: creators.length,
    batches: batches.length,
    batchSize: 50,
    creators
  });
}

export async function POST() {
  return GET();
}
