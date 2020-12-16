export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
  createdAt: Date;
  userId: number;
}

export interface Transport {
  id: number;
  name: string;
  originLocationId: number;
  destinationLocationId: number;
  cost: number;
  weight: number;
  createdAt: Date;
  userId: number;
}
