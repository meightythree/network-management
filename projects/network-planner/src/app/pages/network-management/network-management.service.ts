import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { NetworkManagementApiService } from "shared/api/network-management/network-management.api.service";
import {
  NetworkManagementPageState,
  TransportsTable,
} from "./network-management.interface";
import {
  Location,
  Transport,
} from "shared/api/network-management/network-management.interface";
import { find as _find, map as _map } from "lodash";

@Injectable({
  providedIn: "root",
})
export class NetworkManagementService {
  pageState$: BehaviorSubject<NetworkManagementPageState> = new BehaviorSubject(
    { activeTable: "transports", sort: "createdAt", direction: "desc" }
  );
  activeTable$: Observable<string>;

  constructor(
    private readonly networkManagementApiService: NetworkManagementApiService
  ) {
    this.activeTable$ = this.pageState$.pipe(
      map((pageState) => pageState.activeTable)
    );
  }

  setPageState(newState: NetworkManagementPageState) {
    this.pageState$.next({ ...this.pageState$.value, ...newState });
  }

  getLocations(): Observable<Location[]> {
    return this.networkManagementApiService.getLocations();
  }

  getLocationsSorted(): Observable<Location[]> {
    return combineLatest([
      this.pageState$.asObservable(),
      this.getLocations(),
    ]).pipe(
      map(([pageState, locations]) => this.sortLocations(pageState, locations))
    );
  }

  getTransports(): Observable<Transport[]> {
    return this.networkManagementApiService.getTransports();
  }

  getTransportsTableData(): Observable<TransportsTable[]> {
    return combineLatest([this.getLocations(), this.getTransports()]).pipe(
      map(([locations, transports]) =>
        _map(transports, (transport) =>
          this.mapToTransportsTableData(transport, locations)
        )
      )
    );
  }

  getTransportsTableDataSorted(): Observable<TransportsTable[]> {
    return combineLatest([
      this.pageState$.asObservable(),
      this.getTransportsTableData(),
    ]).pipe(
      map(([pageState, transportTableData]) =>
        this.sortTransports(pageState, transportTableData)
      )
    );
  }

  private mapToTransportsTableData(
    transport: Transport,
    locations: Location[]
  ): TransportsTable {
    const origin: Location = this.findLocationById(
      transport.originLocationId,
      locations
    );
    const destination: Location = this.findLocationById(
      transport.destinationLocationId,
      locations
    );
    return { ...transport, origin, destination };
  }

  private findLocationById(id: number, locations: Location[]): Location {
    return _find(locations, (location) => location.id === id);
  }

  private sortLocations(
    pageState: NetworkManagementPageState,
    locations: Location[]
  ): Location[] {
    const isAsc = "asc" === pageState.direction;
    return locations.slice().sort((a, b) => {
      switch (pageState.sort) {
        case "name":
          return this.compare(a.name, b.name, isAsc);
        case "latitude":
          return this.compare(a.latitude, b.latitude, isAsc);
        case "longitude":
          return this.compare(a.longitude, b.longitude, isAsc);
        case "address":
          return this.compare(a.address, b.address, isAsc);
        default:
          return this.compare(a.createdAt, b.createdAt, isAsc);
      }
    });
  }

  private sortTransports(
    pageState: NetworkManagementPageState,
    transportsTableData: TransportsTable[]
  ) {
    const isAsc = "asc" === pageState.direction;
    return transportsTableData.slice().sort((a, b) => {
      switch (pageState.sort) {
        case "name":
          return this.compare(a.name, b.name, isAsc);
        case "origin":
          return this.compare(a.origin.name, b.origin.name, isAsc);
        case "destination":
          return this.compare(a.destination.name, b.destination.name, isAsc);
        case "cost":
          return this.compare(a.cost, b.cost, isAsc);
        case "weight":
          return this.compare(a.weight, b.weight, isAsc);
        default:
          return this.compare(a.createdAt, b.createdAt, isAsc);
      }
    });
  }

  private compare(
    a: number | string | Date,
    b: number | string | Date,
    isAsc: boolean
  ) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
