export interface IPayment {
  id?: number;
  payment?: number;
  paymentTime?: Date;
}

export class Payment implements IPayment {
  constructor(
    public id?: number,
    public payment?: number,
    public paymentTime?: Date
  ) {
  }

  public static getEmpty(): Payment {
    return new Payment(null, null, null);
  }

  public static fromAssertion(payment: IPayment): Payment {
    return new Payment(
      payment.id,
      payment.payment,
      payment.paymentTime
    )
  }

  public toJson(): any {
    return {
      id: this.id,
      payment: this.payment,
      paymentTime: this.paymentTime
    }
  }
}
