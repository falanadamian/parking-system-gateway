import {Injectable} from "@angular/core";
import {ActionsSubject, select, Store} from "@ngrx/store";
import {PaymentsState, selectAllPayments} from "./payments.reducer";
import * as PaymentsActions from "./payments.actions";
import {selectCurrentPayment} from "../index";
import {Payment} from "@parking-system/domain";

@Injectable({
  providedIn: 'root'
})
export class PaymentsFacade {

  constructor(
    private store: Store<PaymentsState>,
    private actions$: ActionsSubject
  ) {
  }

  allPayments$ = this.store.pipe(select(selectAllPayments));
  currentPayment$ = this.store.pipe(select(selectCurrentPayment));

  selectPayment(paymentId: number) {
    this.store.dispatch(new PaymentsActions.PaymentSelected(paymentId));
  }

  fetchPayments() {
    this.store.dispatch(new PaymentsActions.FetchPayments());
  }

  createPayment(payment: Payment) {
    this.store.dispatch(new PaymentsActions.CreatePayment(payment));
  }

  updatePayment(payment: Payment) {
    this.store.dispatch(new PaymentsActions.UpdatePayment(payment));
  }

  deletePayment(payment: Payment) {
    this.store.dispatch(new PaymentsActions.DeletePayment(payment));
  }


}

