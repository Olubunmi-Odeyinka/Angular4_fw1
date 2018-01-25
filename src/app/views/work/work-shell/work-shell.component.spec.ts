import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShellComponent } from './work-shell.component';

describe('LocationShellComponent', () => {
  let component: WorkShellComponent;
  let fixture: ComponentFixture<WorkShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
