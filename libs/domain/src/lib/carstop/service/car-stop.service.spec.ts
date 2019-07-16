import { TestBed } from '@angular/core/testing';

import { CarStopService } from './car-stop.service';

describe('CarStopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarStopService = TestBed.get(CarStopService);
    expect(service).toBeTruthy();
  });
});
