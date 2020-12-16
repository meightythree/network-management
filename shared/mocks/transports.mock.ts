import { Transport } from "../api/network-management/network-management.interface";

export const transports: Transport[] = [
  {
    id: 1,
    name: "STN-SXF-32456",
    originLocationId: 1,
    destinationLocationId: 2,
    cost: 3000,
    weight: 300,
    createdAt: new Date("2017-01-22T00:00:00"),
    userId: 1,
  },
  {
    id: 2,
    name: "ESB-SXF-76658",
    originLocationId: 3,
    destinationLocationId: 2,
    cost: 8000,
    weight: 180,
    createdAt: new Date("2010-08-10T00:00:00"),
    userId: 1,
  },
  {
    id: 3,
    name: "ESB-OTP-65787",
    originLocationId: 3,
    destinationLocationId: 6,
    cost: 5000,
    weight: 350,
    createdAt: new Date("2019-07-18T00:00:00"),
    userId: 1,
  },
  {
    id: 4,
    name: "BUD-LGG-32148",
    originLocationId: 4,
    destinationLocationId: 5,
    cost: 8900,
    weight: 600,
    createdAt: new Date("2011-07-12T00:00:00"),
    userId: 1,
  },
];
