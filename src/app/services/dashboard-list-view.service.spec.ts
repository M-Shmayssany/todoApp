import { TestBed } from '@angular/core/testing';

import { DashboardListViewService } from './dashboard-list-view.service';

describe('DashboardListViewService', () => {
  let service: DashboardListViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardListViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
