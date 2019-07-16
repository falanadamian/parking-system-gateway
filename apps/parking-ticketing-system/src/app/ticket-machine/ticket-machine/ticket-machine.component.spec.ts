import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMachineComponent } from './ticket-machine.component';

describe('TicketMachineComponent', () => {
  let component: TicketMachineComponent;
  let fixture: ComponentFixture<TicketMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
