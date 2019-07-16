export interface IParkingResponse<T> {
  data?: T;
  message?: string;
}

export class ParkingResponse<T> implements IParkingResponse<T> {
  constructor(
    public data?: T,
    public message?: string
  ) {}

  public static fromAssertion<T>(parkingResponse: IParkingResponse<T>): IParkingResponse<T> {
    return new ParkingResponse<T>(
      parkingResponse.data,
      parkingResponse.message
    )
  }
}
