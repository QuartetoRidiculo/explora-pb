export interface Category {
  id: number;
  name: string;
}

export interface Destination {
  id: number;
  name: string;
  zipCode: string;
  state: string;
  neighborhood: string;
  street: string;
  number: string;
  city: string;
  cityId: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  featured: boolean;
  hidden_gem: boolean;
  latitude: number;
  longitude: number;
  hours: string;
  tips: string;
  climate: string;
  tags: string[];
}

export interface CityStats {
  visitors: string;
  satisfaction: string;
  attractions: number;
}

export interface City {
  id: number;
  name: string;
  state: string;
  image: string;
  description: string;
  attractions: number;
  restaurants: number;
  events: number;
  population: string;
  stats: CityStats;
  highlights: string[];
}

export interface Restaurant {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;

  city: string;
  state: string;
  zipCode: string;
  neighborhood: string;
  street: string;
  number: string;

  rating: number;
  priceRange: string;

  phone: string;
  instagram: string;
}

export interface Event {
  id: number;
  name: string;
  city: string;
  date: string;
  description: string;
  image: string;
  category: string;
}

export interface Review {
  id: number;
  user: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  destinationId: number;
}

export interface SavedRoute {
  id: number;
  name: string;
  destinations: number;
  days: number;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
  favorites: number[];
  reviewsCount: number;
  tripsCount: number;
  placesVisited: number;
  memberSince: string;
  savedRoutes: SavedRoute[];
}

export interface Database {
  categories: Category[];
  destinations: Destination[];
  cities: City[];
  restaurants: Restaurant[];
  events: Event[];
  reviews: Review[];
  mockUser: User;
}
