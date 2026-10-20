export const RARITY_ORDER = ['COMMON', 'UNCOMMON', 'EPIC', 'LEGENDARY', 'ULTIMATE'] as const;

export type Rarity = (typeof RARITY_ORDER)[number];

export const rarityRewardValues: Record<Rarity, number> = {
  COMMON: 1,
  UNCOMMON: 5,
  EPIC: 25,
  LEGENDARY: 50,
  ULTIMATE: 100
};

export const rarityWeights: Record<Rarity, number> = {
  COMMON: 0.5,
  UNCOMMON: 0.28,
  EPIC: 0.15,
  LEGENDARY: 0.06,
  ULTIMATE: 0.01
};

export type CreatorCard = {
  id: string;
  creatorId: string;
  creatorName: string;
  rarity: Rarity;
  customTag?: string;
  image: string;
  subscribers: number;
};

export const creatorPool = [
  { id: 'c1', name: 'MrBeast', subscribers: 240000000, avatar: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=400&q=80' },
  { id: 'c2', name: 'PewDiePie', subscribers: 111000000, avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80' },
  { id: 'c3', name: 'DanTDM', subscribers: 27200000, avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80' },
  { id: 'c4', name: 'Markiplier', subscribers: 37000000, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
  { id: 'c5', name: 'The Game Theorists', subscribers: 9000000, avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { id: 'c6', name: 'IShowSpeed', subscribers: 39000000, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80' },
  { id: 'c7', name: 'ArianaGrandeVevo', subscribers: 51000000, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
  { id: 'c8', name: 'Alpha Gaming', subscribers: 1500000, avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=400&q=80' },
  { id: 'c9', name: 'Street League', subscribers: 780000, avatar: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80' },
  { id: 'c10', name: 'Indie Forge', subscribers: 120000, avatar: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80' }
] as const;

export function determineMaxRarity(subscribers: number): Rarity {
  if (subscribers >= 10000000) return 'ULTIMATE';
  if (subscribers >= 1000000) return 'LEGENDARY';
  if (subscribers >= 500000) return 'EPIC';
  if (subscribers >= 100000) return 'UNCOMMON';
  return 'COMMON';
}

export function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomRarity(): Rarity {
  const roll = Math.random();
  let cursor = 0;

  for (const rarity of RARITY_ORDER) {
    cursor += rarityWeights[rarity];
    if (roll <= cursor) return rarity;
  }

  return 'COMMON';
}

export function generatePack(size = 5): CreatorCard[] {
  return Array.from({ length: size }, (_, index) => {
    const creator = creatorPool[randomBetween(0, creatorPool.length - 1)];
    const rarity = getRandomRarity();
    const maxAllowed = determineMaxRarity(creator.subscribers);

    const resolvedRarity = maxAllowed === 'COMMON' || rarity === 'COMMON' ? 'COMMON' : rarity;

    return {
      id: `card-${Date.now()}-${index}`,
      creatorId: creator.id,
      creatorName: creator.name,
      rarity: resolvedRarity,
      image: creator.avatar,
      subscribers: creator.subscribers,
      customTag: index % 3 === 0 ? 'featured' : undefined
    };
  });
}

export function scrapValue(rarity: Rarity) {
  return rarityRewardValues[rarity] ?? 0;
}

export function chunkArray<T>(items: T[], chunkSize: number): T[][] {
  const result: T[][] = [];

  for (let index = 0; index < items.length; index += chunkSize) {
    result.push(items.slice(index, index + chunkSize));
  }

  return result;
}
