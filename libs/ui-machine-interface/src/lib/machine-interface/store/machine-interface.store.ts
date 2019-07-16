import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {MachineState, TicketPrintTemplate} from "@parking-system/domain";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";
import {MachineInterfaceConfig} from "../config/machine-interface.config";

@Injectable()
export class MachineInterfaceStore<T> {

  private machineState: BehaviorSubject<MachineState> = new BehaviorSubject<MachineState>(MachineState.INITIAL);
  public readonly machineState$: Observable<MachineState> = this.machineState.asObservable();

  private options: BehaviorSubject<ReadonlyArray<string>> = new BehaviorSubject<ReadonlyArray<string>>(this.config.options.INITIAL);
  public readonly options$: Observable<ReadonlyArray<string>> = this.options.asObservable();

  private message: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public readonly message$: Observable<string> = this.message.asObservable();

  private stateTimeout: NodeJS.Timer;

  constructor(
    public config: MachineInterfaceConfig<T>
  ) {
  }

  changeState(state: MachineState) {
    this.machineState.next(state);

    switch (state) {
      case MachineState.INITIAL:
        this.options.next(this.config.options.INITIAL);
        break;
      case MachineState.WAITING_FOR_INPUT:
        this.options.next(this.config.options.WAITING_FOR_INPUT);
        this.resetStateTimeout(MachineState.INITIAL);
        break;
      case MachineState.PROCESSING_REQUEST:
        this.options.next(this.config.options.PROCESSING_REQUEST);
        clearTimeout(this.stateTimeout);
        break;
      case MachineState.TICKET_ISSUED:
        this.options.next(this.config.options.TICKET_ISSUED);
        break;
    }
    this.timeoutMessageClear(3000);
  }

  public createTicket(templateObject: T): TicketPrintTemplate {
    return this.config.createTicket(templateObject);
  }

  public setMessage(message: string) {
    this.message.next(message);
  }

  private timeoutStateChange(time: number, state: MachineState): NodeJS.Timer {
    return setTimeout(() => {
      this.changeState(state);
    }, time);
  }

  resetStateTimeout(state: MachineState) {
    clearTimeout(this.stateTimeout);
    this.stateTimeout = this.timeoutStateChange(this.config.stateResetTime, state);
  }

  public timeoutMessageClear(time: number) {
    setTimeout(() => {
      this.setMessage(null);
    }, time);
  }

}
