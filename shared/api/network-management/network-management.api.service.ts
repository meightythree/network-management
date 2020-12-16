import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { filter as _filter } from "lodash";

import { HttpService } from "../http.service";
import { locations } from "shared/mocks/locations.mock";
import { transports } from "shared/mocks/transports.mock";
import { Location, Transport } from "./network-management.interface";

@Injectable({
  providedIn: "root",
})
export class NetworkManagementApiService {
  constructor(private readonly http: HttpService) {}

  getLocations(): Observable<Location[]> {
    return of(locations);
  }

  getTransports(): Observable<Transport[]> {
    return of(transports);
  }
}
