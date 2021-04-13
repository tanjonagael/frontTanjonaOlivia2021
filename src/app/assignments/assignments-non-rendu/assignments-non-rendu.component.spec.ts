import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsNonRenduComponent } from './assignments-non-rendu.component';

describe('AssignmentsNonRenduComponent', () => {
  let component: AssignmentsNonRenduComponent;
  let fixture: ComponentFixture<AssignmentsNonRenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentsNonRenduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsNonRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
