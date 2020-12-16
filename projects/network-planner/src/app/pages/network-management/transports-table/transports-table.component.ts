import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { NetworkManagementService } from "../network-management.service";
import { TransportsTable } from "../network-management.interface";
import { Sort } from "@angular/material/sort";
import { Router } from "@angular/router";

@Component({
  selector: "app-transports-table",
  templateUrl: "./transports-table.component.html",
  styleUrls: ["./transports-table.component.scss"],
})
export class TransportsTableComponent implements OnInit {
  transports$: Observable<TransportsTable[]>;
  displayedColumns: string[] = [
    "name",
    "originLocationId",
    "destinationLocationId",
    "cost",
    "weight",
  ];

  constructor(
    private readonly networkManagementService: NetworkManagementService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.transports$ = this.networkManagementService.getTransportsTableDataSorted();
  }

  sortTransports(sort: Sort) {
    this.router.navigate(["network-management"], {
      queryParams: {
        table: "transports",
        sort: sort.active,
        direction: sort.direction,
      },
    });
  }
}
