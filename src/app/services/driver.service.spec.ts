import { TestBed, inject } from '@angular/core/testing';

import { DriverService } from './driver.service';

describe('DriverService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriverService]
    });
  });

  it('should ...', inject([DriverService], (service: DriverService) => {
    expect(service).toBeTruthy();
  }));
});
