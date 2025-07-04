import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTable } from './car-table';

describe('CarTable', () => {
  let component: CarTable;
  let fixture: ComponentFixture<CarTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
