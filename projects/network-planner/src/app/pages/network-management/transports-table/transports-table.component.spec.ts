import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpService } from "shared/api/http.service";
import { NetworkManagementApiService } from "shared/api/network-management/network-management.api.service";
import { NetworkManagementModule } from "../network-management.module";
import { NetworkManagementService } from "../network-management.service";

import { TransportsTableComponent } from "./transports-table.component";

const fakeActivatedRoute = {
  snapshot: { data: {} },
} as ActivatedRoute;

describe("TransportsTableComponent", () => {
  let component: TransportsTableComponent;
  let fixture: ComponentFixture<TransportsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransportsTableComponent],
      providers: [
        NetworkManagementService,
        NetworkManagementApiService,
        HttpService,
        HttpClient,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        Router,
      ],
      imports: [NetworkManagementModule, HttpClientModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
