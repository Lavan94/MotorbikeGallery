export class Asset {
  constructor(
    public name: string,
    public category: string,
    public assetUrl: string,
    public assetType: string
  ) {
  }
}

export const ASSET_TYPES: string[] = ['image','video','audio']

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
