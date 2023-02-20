import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessMessagesComponent } from './process-messages.component';

describe('ProcessMessagesComponent', () => {
  let component: ProcessMessagesComponent;
  let fixture: ComponentFixture<ProcessMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
