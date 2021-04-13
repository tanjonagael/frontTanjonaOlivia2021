import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsRenduComponent } from './assignments-rendu.component';

describe('AssignmentsRenduComponent', () => {
  let component: AssignmentsRenduComponent;
  let fixture: ComponentFixture<AssignmentsRenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentsRenduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
