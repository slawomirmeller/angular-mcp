import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessRunsComponent } from './process-runs.component';

describe('ProcessRunsComponent', () => {
  let component: ProcessRunsComponent;
  let fixture: ComponentFixture<ProcessRunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessRunsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
