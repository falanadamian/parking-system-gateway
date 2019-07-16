import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MachineState} from "@parking-system/domain";
import {MachineInterfaceStore} from "./store/machine-interface.store";

@Component({
  selector: 'ui-machine-interface',
  templateUrl: './machine-interface.component.html',
  styleUrls: ['./machine-interface.component.scss']
})
export class MachineInterfaceComponent<T> implements OnInit, OnChanges {

  MachineState = MachineState;

  @Input() brand: string;

  @Input() preMessage: string;
  @Input() message: string;
  @Input() postMessage: string;

  @Output() keypadDigitsCollected: EventEmitter<string> = new EventEmitter<string>();

  screenDisabled: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    this.screenDisabled = true;
    setTimeout(() => {
      this.screenDisabled = false;
    }, 100);
  }

  constructor(public machineInterfaceStore: MachineInterfaceStore<T>) {
  }

  ngOnInit() {
  }

  onDigitsCollected(userInput: string) {
    this.keypadDigitsCollected.emit(userInput);
  }

  onKeypadKeyClicked() {
    this.machineInterfaceStore.resetStateTimeout(MachineState.INITIAL);
  }

  ticketClick() {
    this.machineInterfaceStore.changeState(MachineState.INITIAL);
  }

}
