import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./pages/app-routing.module";

import { NetworkManagementModule } from "./pages/network-management/network-management.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NetworkManagementModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
