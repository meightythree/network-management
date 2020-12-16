import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NetworkManagementComponent } from "./network-management/network-management.component";

const routes: Routes = [
  { path: "network-management", component: NetworkManagementComponent },
  { path: "**", redirectTo: "network-management" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
