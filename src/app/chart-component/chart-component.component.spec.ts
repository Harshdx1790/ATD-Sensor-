import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponentComponent } from './chart-component.component';

describe('ChartComponentComponent', () => {
  let component: ChartComponentComponent;
  let fixture: ComponentFixture<ChartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show TEST INPUT', () => {
    component.node = {0: 'Red', 1: 'Green', 2: 'Red', 3: 'Green', 4: 'Red', 5: 'Green', 6: 'Red', 7: 'Red', 8: 'Green'};
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component).toBeTruthy()
  });

});
