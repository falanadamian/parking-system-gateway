import { Component, OnInit } from '@angular/core';
import {MachineState, CarStop, KeypadTemplate} from "@parking-system/domain";

@Component({
  selector: 'parking-ticketing-system-ticket-machine',
  templateUrl: './ticket-machine.component.html',
  styleUrls: ['./ticket-machine.component.scss']
})
export class TicketMachineComponent implements OnInit {

  readonly keypadTemplate: KeypadTemplate = new KeypadTemplate.Builder()
                                                              .withResetTime(2500)
                                                              .withKeypadColumns(3)
                                                              .withRangeStart(1)
                                                              .withRangeEnd(2)
                                                              .build();

  readonly MACHINE_BRAND: string = "BRANDNEW";
  readonly PRE_MESSAGE: string = "Welcome to ticket machine service!";
  postMessage: string = `Wait for ${this.keypadTemplate.resetTime/1000} seconds after you entered the data.`;

  options: Array<string> = [
    "Press 1 to get a ticket and enter parking",
    "Or use your subscription card to enter parking"
  ];

  response: string = "Response";

  machineState: MachineState = MachineState.INITIAL;

  carStop: CarStop = CarStop.getEmpty();

  constructor() { }

  ngOnInit() {
  }

  animateTicket(): boolean {
    return this.machineState == MachineState.TICKET_ISSUED;
  }

  handleKeypadChange(userInput: string) {
    console.log("keypad change");
  }

  handleContactlessClick() {
    this.machineState = MachineState.TICKET_ISSUED;
    console.log("contactless click");
  }

  handleTicketClick() {
    this.machineState = MachineState.INITIAL;
    console.log("ticket click")
  }

  callme(e) {
    console.log(e);
  }

}
