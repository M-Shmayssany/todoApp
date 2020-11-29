import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListViewComponent } from './dashboard-list-view.component';

describe('DashboardListViewComponent', () => {
  let component: DashboardListViewComponent;
  let fixture: ComponentFixture<DashboardListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
