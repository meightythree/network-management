import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NetworkManagementComponent } from "./network-management.component";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTableModule } from "@angular/material/table";
import { LocationsTableComponent } from "./locations-table/locations-table.component";
import { TransportsTableComponent } from "./transports-table/transports-table.component";
import { MatSortModule } from "@angular/material/sort";
@NgModule({
  declarations: [
    NetworkManagementComponent,
    LocationsTableComponent,
    TransportsTableComponent,
  ],
  exports: [NetworkManagementComponent],
  imports: [CommonModule, MatButtonToggleModule, MatSortModule, MatTableModule],
})
export class NetworkManagementModule {}
