import { async, TestBed } from '@angular/core/testing';
import { UiKeypadModule } from './ui-keypad.module';

describe('UiKeypadModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiKeypadModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiKeypadModule).toBeDefined();
  });
});
