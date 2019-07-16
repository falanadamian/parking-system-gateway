import {MachineInterfaceConfig} from "../../../../../../../libs/ui-machine-interface/src/lib/machine-interface/config/machine-interface.config";
import {Injectable} from "@angular/core";
import {MachineInterfaceOptions} from "../../../../../../../libs/ui-machine-interface/src/lib/machine-interface/config/machine-interface.options";
import {CarStop, KeypadTemplate, TicketPrintTemplate} from "@parking-system/domain";
import {formatDate} from "@angular/common";

@Injectable()
export class TicketMachineConfig implements MachineInterfaceConfig<CarStop> {

  private static readonly INITIAL_STATE_OPTIONS: ReadonlyArray<string> = [
    "Press button to get a ticket",
    "Use your subscription card to enter parking"
  ];

  private static readonly WAITING_FOR_INPUT_STATE_OPTIONS: ReadonlyArray<string> = [
    "Please enter your subscription card code."
  ];

  private static readonly PROCESSING_REQUEST_STATE_OPTIONS: ReadonlyArray<string> = [
    "Your request is being processed, please wait..."
  ];

  private static readonly TICKET_ISSUED_STATE_OPTIONS: ReadonlyArray<string> = [
    "Please take your ticket and save it for your departure."
  ];

  public keypadTemplate: KeypadTemplate;
  public options: MachineInterfaceOptions;
  public ticketTemplate: TicketPrintTemplate;

  public stateResetTime: number= 3000;

  constructor() {
    this.options = new MachineInterfaceOptions.Builder()
                                              .withInitial(TicketMachineConfig.INITIAL_STATE_OPTIONS)
                                              .withWaitingForInput(TicketMachineConfig.WAITING_FOR_INPUT_STATE_OPTIONS)
                                              .withProcessingRequest(TicketMachineConfig.PROCESSING_REQUEST_STATE_OPTIONS)
                                              .withTicketIssued(TicketMachineConfig.TICKET_ISSUED_STATE_OPTIONS)
                                              .build();

    this.keypadTemplate = new KeypadTemplate.Builder()
                                            .withKeypadColumns(3)
                                            .withRangeStart(1)
                                            .withRangeEnd(9)
                                            .build();
  }

  public createTicket(carStop: CarStop): TicketPrintTemplate {
    this.ticketTemplate = new TicketPrintTemplate.Builder()
                                                 .withAvatarUrl("assets/parking-sign.png")
                                                 .withTitle("ABC North Parking")
                                                 .withSubtitle(`Ticket no ${carStop.ticketCode}`)
                                                 .withContent(new Map<string, string>([
                                                   ["Entry time", carStop.entryTime ? formatDate(carStop.entryTime, "yyyy/MM/dd hh:mm", "en") : "N/A"],
                                                   ["Ticket status", carStop.carStopStatus],
                                                   ["Ticket type", carStop.carStopType],
                                                 ]))
                                                 .build();

    return this.ticketTemplate;
  }

}
