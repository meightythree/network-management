import {
  Transport,
  Location,
} from "shared/api/network-management/network-management.interface";

export interface NetworkManagementPageState {
  activeTable: "locations" | "transports";
  sort: string;
  direction: "asc" | "desc";
}

export interface TransportsTable extends Transport {
  origin: Location;
  destination: Location;
}
