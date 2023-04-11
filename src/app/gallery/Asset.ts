export class Asset {
  constructor(
    public id: string,
    public name: string,
    public category: string,
    public assetUrl: string,
    public assetType: string,
    public rotation: number = 0,
    public scale: [number, number] = [1, 1],
    public blur: number = 0
  ) {
  }
}

export const ASSET_TYPES: string[] = ['image', 'video', 'audio']

export const ASSET_CATEGORIES = [
  'Cruiser',
  'Sport',
  'Tour',
  'Sport-Tour',
  'Naked',
  'Sedan',
  'Hatchback',
  'SUV',
  'Pickup',
]
