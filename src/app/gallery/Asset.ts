export class Asset {
  constructor(
    public name: string,
    public category: string,
    public assetFile: File
  ) {
  }
}

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
