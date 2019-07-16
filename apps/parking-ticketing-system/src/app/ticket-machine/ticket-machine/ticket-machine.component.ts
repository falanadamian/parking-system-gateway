import {Component, OnInit} from '@angular/core';
import {CarStop, MachineState} from "@parking-system/domain";
import {MachineInterfaceStore} from "../../../../../../libs/ui-machine-interface/src/lib/machine-interface/store/machine-interface.store";
import {MachineInterfaceConfig} from "../../../../../../libs/ui-machine-interface/src/lib/machine-interface/config/machine-interface.config";
import {TicketMachineConfig} from "./config/ticket-machine.config";
import {HttpErrorResponse} from "@angular/common/http";
import {ParkingService} from "../../../../../../libs/domain/src/lib/parking/parking.service";

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
    private machineInterfaceStore: MachineInterfaceStore<CarStop>,
    private parkingService: ParkingService
  ) {
  }

  ngOnInit() {
  }

  onDigitsCollected(userInput: string) {
    this.machineInterfaceStore.changeState(MachineState.PROCESSING_REQUEST);
    this.subscriptionParkingEntry(userInput);
  }

  changeState(state: MachineState) {
    this.machineInterfaceStore.changeState(state);
  }

  subscriptionParkingEntry(cardCode: string) {
    this.parkingService.subscriptionParkingEntry(cardCode).subscribe(response => {
      this.machineInterfaceStore.setMessage(response);
    }, (error: HttpErrorResponse) => {
      this.machineInterfaceStore.setMessage(error.error);
    }).add(() => {
      this.changeState(MachineState.INITIAL);
    });
  }

  issueTicket() {
    this.changeState(MachineState.PROCESSING_REQUEST);
    this.parkingService.regularParkingEntry().subscribe(response => {
      this.machineInterfaceStore.setMessage(response.message);
      this.machineInterfaceStore.createTicket(CarStop.fromAssertion(response.data));
      this.changeState(MachineState.TICKET_ISSUED);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}

