import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutPieComponent } from './donut-pie.component';

describe('DonutPieComponent', () => {
  let component: DonutPieComponent;
  let fixture: ComponentFixture<DonutPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
