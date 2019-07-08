import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent implements OnInit {

  @Input() rangeStart: number = 1;
  @Input() rangeEnd: number = 9;
  @Input() keypadColumns: number = 3;
  @Input() resetTime: number = 2000;

  @Output() onKeypadChange: EventEmitter<string> = new EventEmitter<string>();

  digits: string;

  rows: Array<number>;
  keys: Array<number>;

  private timeout: NodeJS.Timer;

  constructor() {
    this.resetInput();
  }

  resetInput() {
    clearTimeout(this.timeout);
    this.digits = '';
  }

  private setTimeout(): NodeJS.Timer {
    return setTimeout(() => {
      this.onKeypadChange.emit(this.digits);
      this.resetInput();
    }, this.resetTime);
  }

  private manageTimeout() {
    clearTimeout(this.timeout);
    this.timeout = this.setTimeout();
  }

  onKeyClick(key: number) {
    this.manageTimeout();
    this.digits += key;
  }

  undoInput() {
    this.digits = this.digits.slice(0, -1);
    this.digits ? this.manageTimeout() : clearTimeout(this.timeout);
  }

  private numbersBetween(start: number, end: number): Array<number> {
    const arraySize: number = Math.floor(end) - Math.ceil(start) + 1;
    return Array(arraySize).fill(1)
                            .map((x: number, index: number) => Math.ceil(start) + index);
  }

  private initializeKeys() {
    this.keys = this.numbersBetween(this.rangeStart, this.rangeEnd);
  }

  private initializeRows() {
    const rowNumbers = Math.ceil(this.keys.length / this.keypadColumns - 1);
    this.rows = this.numbersBetween(0, rowNumbers > 0 ? rowNumbers : 1);
  }

  ngOnInit() {
    this.initializeKeys();
    this.initializeRows();
  }

}
