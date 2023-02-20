import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessStepDetailsComponent } from './process-step-details.component';

describe('ProcessStepDetailsComponent', () => {
  let component: ProcessStepDetailsComponent;
  let fixture: ComponentFixture<ProcessStepDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessStepDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessStepDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
