import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { NetworkManagementService } from "./network-management.service";

describe("NetworkManagementService", () => {
  let service: NetworkManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(NetworkManagementService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
