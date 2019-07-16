import { async, TestBed } from '@angular/core/testing';
import { UiMachineInterfaceModule } from './ui-machine-interface.module';

describe('UiMachineInterfaceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiMachineInterfaceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiMachineInterfaceModule).toBeDefined();
  });
});
