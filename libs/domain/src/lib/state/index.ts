import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromCarStops from './carstops/car-stops.reducer';
import * as fromPayments from './payments/payments.reducer';
import {CarStop, Payment} from "@parking-system/domain";

export interface AppState {
  carStops: fromCarStops.CarStopsState;
  payments: fromPayments.PaymentsState;
}

export const reducers: ActionReducerMap<AppState> = {
  carStops: fromCarStops.carStopsReducer,
  payments: fromPayments.paymentsReducer
};


// CAR STOP SELECTORS
export const selectCarStopsState = createFeatureSelector<fromCarStops.CarStopsState>('carStops');

export const selectCarStopEntities = createSelector(
  selectCarStopsState,
  fromCarStops.selectCarStopIds
);

export const selectAllCarStops = createSelector(
  selectCarStopsState,
  fromCarStops.selectAllCarStops
);

export const selectCurrentCarStopId = createSelector(
  selectCarStopsState,
  fromCarStops.getSelectedCarStopId
);

export const selectCurrentCarStop = createSelector(
  selectCarStopEntities,
  selectCurrentCarStopId,
  (carStopEntities, currentCarStopId) => currentCarStopId ? carStopEntities[currentCarStopId] : CarStop.getEmpty()
);


// PAYMENTS SELECTORS
export const selectPaymentsState = createFeatureSelector<fromPayments.PaymentsState>('payments');

export const selectPaymentEntities = createSelector(
  selectPaymentsState,
  fromPayments.selectPaymentIds
);

export const selectAllPayments = createSelector(
  selectPaymentsState,
  fromPayments.selectAllPayments
);

export const selectCurrentPaymentId = createSelector(
  selectPaymentsState,
  fromPayments.getSelectedPaymentId
);

export const selectCurrentPayment = createSelector(
  selectPaymentEntities,
  selectCurrentPaymentId,
  (paymentEntities, currentPaymentId) => currentPaymentId ? paymentEntities[currentPaymentId] : Payment.getEmpty()
);
