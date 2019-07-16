import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {DataPersistence} from "@nrwl/angular";

import {Payment, PaymentService} from "@parking-system/domain";
import {PaymentsState} from "./payments.reducer";

import {
  CreatePayment,
  FetchPayments,
  PaymentCreated,
  PaymentsActionTypes,
  PaymentsFetched,
  PaymentUpdated,
  UpdatePayment
} from "./payments.actions";

import {map} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PaymentsEffects {

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PaymentsState>,
    private paymentService: PaymentService
  ) {
  }

  @Effect()
  loadPayments$ = this.dataPersistence.fetch(PaymentsActionTypes.FetchPayments, {
    run: (action: FetchPayments, state: PaymentsState) => {
      return this.paymentService.getAll()
        .pipe(map((response: Payment[]) => new PaymentsFetched(response)))
    },
    onError: (action: FetchPayments, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  createPayment$ = this.dataPersistence.pessimisticUpdate(PaymentsActionTypes.CreatePayment, {
    run: (action: CreatePayment, state: PaymentsState) => {
      return this.paymentService.create(action.payload)
        .pipe(map((response: Payment) => new PaymentCreated(response)))
    },
    onError: (action: CreatePayment, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updatePayment$ = this.dataPersistence.pessimisticUpdate(PaymentsActionTypes.UpdatePayment, {
    run: (action: UpdatePayment, state: PaymentsState) => {
      return this.paymentService.update(action.payload)
        .pipe(map((response: Payment) => new PaymentUpdated(response)))
    },

    onError: (action: UpdatePayment, error) => {
      console.error('Error', error);
    }
  });

}
