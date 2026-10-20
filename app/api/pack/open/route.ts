import { NextResponse } from 'next/server';
import { generatePack } from '@/lib/game';

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as {
    userId?: string;
    reserve?: number;
  };

  const pack = generatePack(5);

  return NextResponse.json({
    ok: true,
    userId: body.userId ?? 'demo-user',
    reserve: Math.max(0, (body.reserve ?? 5) - 1),
    cards: pack,
    message: 'Pack opened successfully.'
  });
}
