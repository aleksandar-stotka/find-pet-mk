// Define possible age categories
export type AgeCategory = 'Puppy' | 'Young' | 'Adult' | 'Senior'

// Define possible cities (for North Macedonia example)
export type City =
  | 'Skopje'
  | 'Bitola'
  | 'Ohrid'
  | 'Prilep'
  | 'Tetovo'
  | 'Kumanovo'
  | 'Veles'
  | 'Gostivar'

// Define dog breeds
export type DogBreed =
  | 'Mixed'
  | 'Labrador Retriever'
  | 'German Shepherd'
  | 'Golden Retriever'
  | 'Bulldog'
  | 'Poodle'
  | 'Beagle'
  | 'Husky'
  | 'Rottweiler'
  | 'Maltese'

// Full Pet interface
export interface Pet {
  id: string
  name: string
  type: 'Dog' | 'Cat' | 'Rabbit' | 'Other'
  breed: DogBreed
  ageCategory: AgeCategory
  ageInYears: number
  city: City
  description: string
  photoUrl: string
  adopted: boolean
  ownerId: string
  createdAt: Date
}
