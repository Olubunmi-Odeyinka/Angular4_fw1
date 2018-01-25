import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAndDisplayTableComponent } from './form-and-display-table.component';

describe('FormAndDisplayTableComponent', () => {
  let component: FormAndDisplayTableComponent;
  let fixture: ComponentFixture<FormAndDisplayTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAndDisplayTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAndDisplayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
