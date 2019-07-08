import {CarStopStatus} from './car-stop-status.enum';
import {CarStopType} from './car-stop-type.enum';

export interface ICarStop {
  id?: number;
  ticketCode?: string;
  driverId?: number;
  paymentsIds?: Array<number>;
  carStopStatus?: CarStopStatus;
  carStopType?: CarStopType;
  entryTime?: Date;
  departureTime?: Date;
}

export class CarStop implements ICarStop {
  constructor(
    public id?: number,
    public ticketCode?: string,
    public driverId?: number,
    public paymentsIds?: Array<number>,
    public carStopStatus?: CarStopStatus,
    public carStopType?: CarStopType,
    public entryTime?: Date,
    public departureTime?: Date,
  ) {
  }

  public static getEmpty(): CarStop {
    return new CarStop(null, null, null, [], null, null, null, null);
  }

  public static fromAssertion(carStop: ICarStop): CarStop {
    return new CarStop(
      carStop.id,
      carStop.ticketCode,
      carStop.driverId,
      carStop.paymentsIds ? carStop.paymentsIds : [],
      carStop.carStopStatus ? <CarStopStatus>CarStopStatus[carStop.carStopStatus] : null,
      carStop.carStopType ? <CarStopType>CarStopType[carStop.carStopType] : null,
      carStop.entryTime,
      carStop.departureTime
    )
  }

  public toJson(): any {
    return {
      id: this.id,
      ticketCode: this.ticketCode,
      driverId: this.driverId,
      paymentsIds: this.paymentsIds,
      ticketStatus: this.carStopStatus,
      ticketType: this.carStopType,
      entryTime: this.entryTime,
      departureTime: this.departureTime
    }
  }
}
