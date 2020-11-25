import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewListComponent } from './dashboard-new-list.component';

describe('DashboardNewListComponent', () => {
  let component: DashboardNewListComponent;
  let fixture: ComponentFixture<DashboardNewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
