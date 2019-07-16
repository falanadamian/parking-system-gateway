import {Action} from '@ngrx/store';
import {Payment} from '@parking-system/domain';

export enum PaymentsActionTypes {
  PaymentsActions = '[Payments] Action',
  PaymentSelected = '[Payments] Selected',
  FetchPayments = '[Payments] Fetch data',
  PaymentsFetched = '[Payments] Data fetched',
  CreatePayment = '[Payments] Create data',
  PaymentCreated = '[Payments] Data created',
  UpdatePayment = '[Payments] Update data',
  PaymentUpdated = '[Payments] Data updated',
  DeletePayment = '[Payments] Delete data',
  PaymentDeleted = '[Payments] Data deleted',
}

export class Payments implements Action {
  readonly type = PaymentsActionTypes.PaymentsActions;
}

export class PaymentSelected implements Action {
  readonly type = PaymentsActionTypes.PaymentSelected;

  constructor(public payload) {
  }
}

export class FetchPayments implements Action {
  readonly type = PaymentsActionTypes.FetchPayments;

  constructor() {
  }
}

export class PaymentsFetched implements Action {
  readonly type = PaymentsActionTypes.PaymentsFetched;

  constructor(public payload: Payment[]) {
  }
}

export class CreatePayment implements Action {
  readonly type = PaymentsActionTypes.CreatePayment;

  constructor(public payload: Payment) {
  }
}

export class PaymentCreated implements Action {
  readonly type = PaymentsActionTypes.PaymentCreated;

  constructor(public payload: Payment) {
  }
}

export class UpdatePayment implements Action {
  readonly type = PaymentsActionTypes.UpdatePayment;

  constructor(public payload: Payment) {
  }
}

export class PaymentUpdated implements Action {
  readonly type = PaymentsActionTypes.PaymentUpdated;

  constructor(public payload: Payment) {
  }
}

export class DeletePayment implements Action {
  readonly type = PaymentsActionTypes.DeletePayment;

  constructor(public payload: Payment) {
  }
}

export class PaymentDeleted implements Action {
  readonly type = PaymentsActionTypes.PaymentDeleted;

  constructor(public payload: Payment) {
  }
}

export type PaymentsActions = Payments
  | PaymentSelected
  | FetchPayments
  | PaymentsFetched
  | CreatePayment
  | PaymentCreated
  | UpdatePayment
  | PaymentUpdated
  | DeletePayment
  | PaymentDeleted
  ;
