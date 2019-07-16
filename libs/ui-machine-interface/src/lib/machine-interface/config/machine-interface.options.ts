export interface MachineInterfaceOptions {

  INITIAL: ReadonlyArray<string>;
  WAITING_FOR_INPUT: ReadonlyArray<string>;
  PROCESSING_REQUEST: ReadonlyArray<string>;
  TICKET_ISSUED: ReadonlyArray<string>;
}

export class MachineInterfaceOptions {

  constructor(
    public readonly machineInterfaceOptions?: MachineInterfaceOptions
  ) {
    Object.assign(this, machineInterfaceOptions)
  }

  static Builder = class Builder implements Partial<MachineInterfaceOptions> {
    INITIAL: ReadonlyArray<string>;
    WAITING_FOR_INPUT: ReadonlyArray<string>;
    PROCESSING_REQUEST?: ReadonlyArray<string>;
    TICKET_ISSUED?: ReadonlyArray<string>;

    withInitial(initialOptions: ReadonlyArray<string>): this & Pick<MachineInterfaceOptions, 'INITIAL'> {
      return Object.assign(this, {INITIAL: initialOptions});
    }

    withWaitingForInput(waitingForInput: ReadonlyArray<string>): this & Pick<MachineInterfaceOptions, 'WAITING_FOR_INPUT'> {
      return Object.assign(this, {WAITING_FOR_INPUT: waitingForInput});
    }

    withProcessingRequest(processingRequest: ReadonlyArray<string>): this & Pick<MachineInterfaceOptions, 'PROCESSING_REQUEST'> {
      return Object.assign(this, {PROCESSING_REQUEST: processingRequest});
    }

    withTicketIssued(ticketIssued: ReadonlyArray<string>): this & Pick<MachineInterfaceOptions, 'TICKET_ISSUED'> {
      return Object.assign(this, {TICKET_ISSUED: ticketIssued});
    }

    build(this: MachineInterfaceOptions) {
      return new MachineInterfaceOptions(this);
    }
  };
}
