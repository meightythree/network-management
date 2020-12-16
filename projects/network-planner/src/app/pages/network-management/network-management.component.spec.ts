import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpService } from "shared/api/http.service";
import { NetworkManagementApiService } from "shared/api/network-management/network-management.api.service";

import { NetworkManagementComponent } from "./network-management.component";
import { NetworkManagementModule } from "./network-management.module";
import { NetworkManagementService } from "./network-management.service";

describe("NetworkManagementComponent", () => {
  let component: NetworkManagementComponent;
  let fixture: ComponentFixture<NetworkManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetworkManagementComponent],
      providers: [
        NetworkManagementService,
        NetworkManagementApiService,
        HttpService,
        HttpClient,
        Router,
      ],
      imports: [NetworkManagementModule, HttpClientModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
