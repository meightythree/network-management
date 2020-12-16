import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatButtonToggleChange } from "@angular/material/button-toggle";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { NetworkManagementService } from "./network-management.service";

@Component({
  selector: "app-network-management",
  templateUrl: "./network-management.component.html",
  styleUrls: ["./network-management.component.scss"],
})
export class NetworkManagementComponent implements OnInit, OnDestroy {
  activeTable$: Observable<string>;

  private subs: Subscription[] = [];

  constructor(
    private readonly networkManagementService: NetworkManagementService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.activeTable$ = this.networkManagementService.activeTable$;
    this.subs.push(
      this.activatedRoute.queryParams.subscribe((queryParams) =>
        this.handleQueryParamsChange(queryParams)
      )
    );
  }

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }

  handleQueryParamsChange(queryParams: any) {
    let sort = queryParams.sort;
    let direction = queryParams.direction;
    if (
      queryParams &&
      queryParams.table &&
      ["transports", "locations"].includes(queryParams.table)
    ) {
      this.networkManagementService.setPageState({
        activeTable: queryParams.table,
        sort,
        direction,
      });
    }
  }

  onTableToggle(e: MatButtonToggleChange) {
    this.router.navigate(["network-management"], {
      queryParams: { table: e.value, sort: "createdAt" },
    });
  }
}
