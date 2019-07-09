import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MachineState } from "@parking-system/domain";

@Component({
  selector: 'ui-machine-interface',
  templateUrl: './machine-interface.component.html',
  styleUrls: ['./machine-interface.component.scss']
})
export class MachineInterfaceComponent implements OnInit {

  @Input() brand: string = "Default title";

  @Input() preMessage: string = "Default pre message...";
  @Input() message: string = "Default message...";
  @Input() postMessage: string = "Default post message...";

  @Input() options: Array<string> = new Array<string>();

  @Output() ticketClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() contactlessClick: EventEmitter<void> = new EventEmitter<void>();

  @Output() keypadValueChange: EventEmitter<string> = new EventEmitter<string>();

  machineStateValue: MachineState = MachineState.INITIAL;
  @Output() machineStateChange: EventEmitter<MachineState> = new EventEmitter<MachineState>();

  @Input()
  get machineState(): MachineState {
    return this.machineStateValue;
  }

  set machineState(machineState: MachineState) {
    this.machineStateValue = machineState;
    this.machineStateChange.emit(this.machineStateValue);
  }

  @Input() animateTicket: boolean;

  constructor() { }

  ngOnInit() {
  }

}
