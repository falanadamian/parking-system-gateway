import {Component, OnInit} from '@angular/core';
import {CarStop, MachineState} from "@parking-system/domain";
import {MachineInterfaceStore} from "../../../../../../libs/ui-machine-interface/src/lib/machine-interface/store/machine-interface.store";
import {MachineInterfaceConfig} from "../../../../../../libs/ui-machine-interface/src/lib/machine-interface/config/machine-interface.config";
import {TicketMachineConfig} from "./config/ticket-machine.config";

@Component({
  selector: 'parking-ticketing-system-ticket-machine',
  templateUrl: './ticket-machine.component.html',
  styleUrls: ['./ticket-machine.component.scss'],
  providers: [
    MachineInterfaceStore,
    {provide: MachineInterfaceConfig, useClass: TicketMachineConfig}
  ]
})
export class TicketMachineComponent implements OnInit {

  MachineState = MachineState;

  readonly MACHINE_BRAND: string = "BRANDNAME";
  readonly PRE_MESSAGE: string = "Welcome to ticket machine service!";
  readonly POST_MESSAGE: string = "In case of emergency call 123 456 789";

  constructor(
    private machineInterfaceStore: MachineInterfaceStore<CarStop>
  ) {
  }

  ngOnInit() {
  }

  onDigitsCollected(userInput: string) {
    this.machineInterfaceStore.changeState(MachineState.PROCESSING_REQUEST);
    this.subscriptionParkingEntry(userInput);
  }

  changeState(machineState: MachineState) {
    this.machineInterfaceStore.changeState(machineState);
  }

  setMessage(message: string) {
    this.machineInterfaceStore.setMessage(message);
  }

  subscriptionParkingEntry(cardCode: string) {
    //TODO
    console.log("subscription parking entry", cardCode);
    this.setMessage("subscription parking entry");
    setTimeout(() => {
      this.changeState(MachineState.INITIAL);
    }, 1000);
  }

  issueTicket() {
    //TODO
    console.log("issue ticket");
    this.setMessage("issue ticket");
    setTimeout(() => {
      this.changeState(MachineState.INITIAL);
    }, 1000);
  }

}

