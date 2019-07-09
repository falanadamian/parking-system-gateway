import { async, TestBed } from '@angular/core/testing';
import { UiTicketPrintModule } from './ui-ticket-print.module';

describe('UiTicketPrintModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiTicketPrintModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiTicketPrintModule).toBeDefined();
  });
});
