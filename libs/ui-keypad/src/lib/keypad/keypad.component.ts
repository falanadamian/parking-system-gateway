import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {KeypadTemplate} from "@parking-system/domain";

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
  @Input() disabled: boolean = false;

  @Input()
  set template(template: KeypadTemplate) {
    this.rangeStart = template.rangeStart;
    this.rangeEnd = template.rangeEnd;
    this.keypadColumns = template.keypadColumns;
    this.calculateKeys();
    this.calculateRows();
  }

  @Output()digitsCollected: EventEmitter<string> = new EventEmitter<string>();
  @Output() keyClicked: EventEmitter<number> = new EventEmitter<number>();

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
      this.digitsCollected.emit(this.digits);
      this.resetInput();
    }, this.resetTime);
  }

  private manageTimeout() {
    clearTimeout(this.timeout);
    this.timeout = this.setTimeout();
  }

  keyClick(key: number) {
    this.manageTimeout();
    this.digits += key;
    this.keyClicked.emit(key);
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

  private calculateKeys() {
    this.keys = this.numbersBetween(this.rangeStart, this.rangeEnd);
  }

  private calculateRows() {
    const rowNumbers = Math.ceil(this.keys.length / this.keypadColumns - 1);
    this.rows = this.numbersBetween(0, rowNumbers > 0 ? rowNumbers : 1);
  }

  ngOnInit() {
    this.calculateKeys();
    this.calculateRows();
  }

}
