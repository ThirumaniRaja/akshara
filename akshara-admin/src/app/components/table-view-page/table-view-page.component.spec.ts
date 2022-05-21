import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewPageComponent } from './table-view-page.component';

describe('TableViewPageComponent', () => {
  let component: TableViewPageComponent;
  let fixture: ComponentFixture<TableViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
