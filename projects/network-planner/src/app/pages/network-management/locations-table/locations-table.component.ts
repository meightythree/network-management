import { Component, OnInit } from "@angular/core";
import { Sort } from "@angular/material/sort";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Location } from "shared/api/network-management/network-management.interface";
import { NetworkManagementService } from "../network-management.service";

@Component({
  selector: "app-locations-table",
  templateUrl: "./locations-table.component.html",
  styleUrls: ["./locations-table.component.scss"],
})
export class LocationsTableComponent implements OnInit {
  locations$: Observable<Location[]>;
  displayedColumns: string[] = ["name", "latitude", "longitude", "address"];

  constructor(
    private readonly networkManagementService: NetworkManagementService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.locations$ = this.networkManagementService.getLocationsSorted();
  }

  sortLocations(sort: Sort) {
    this.router.navigate(["network-management"], {
      queryParams: {
        table: "locations",
        sort: sort.active,
        direction: sort.direction,
      },
    });
  }
}
