import {Injectable} from "@angular/core";
import {MachineInterfaceOptions} from "./machine-interface.options";
import {KeypadTemplate, TicketPrintTemplate} from "@parking-system/domain";

@Injectable()
export class MachineInterfaceConfig<T> {

  public options: MachineInterfaceOptions;
  public keypadTemplate: KeypadTemplate;
  public ticketTemplate: TicketPrintTemplate;

  public stateResetTime: number;

  public createTicket: (templateObject: T) => TicketPrintTemplate;

  constructor() {
  }

}
