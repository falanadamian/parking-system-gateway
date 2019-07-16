import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {PaymentsActions, PaymentsActionTypes} from "./payments.actions";
import {Payment} from "@parking-system/domain";

export interface PaymentsState extends EntityState<Payment> {
  selectedPaymentId: string | null;
}

export const adapter: EntityAdapter<Payment> = createEntityAdapter<Payment>();

export const initialState: PaymentsState = adapter.getInitialState({
  selectedPaymentId: null,
});

export function paymentsReducer(state = initialState, action: PaymentsActions): PaymentsState {

  switch (action.type) {
    case PaymentsActionTypes.PaymentSelected: {
      return Object.assign({}, state, {selectedPaymentId: action.payload});
    }
    case PaymentsActionTypes.PaymentsFetched: {
      return adapter.addAll(action.payload, state);
    }
    case PaymentsActionTypes.PaymentCreated: {
      return adapter.addOne(action.payload, state);
    }
    case PaymentsActionTypes.PaymentUpdated: {
      return adapter.upsertOne(action.payload, state);
    }
    case PaymentsActionTypes.PaymentDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

const {selectIds, selectEntities, selectAll, selectTotal} = adapter.getSelectors();
export const selectPaymentIds = selectIds;
export const selectPaymentEntities = selectEntities;
export const selectAllPayments = selectAll;
export const selectPaymentTotal = selectTotal;
export const getSelectedPaymentId = (state: PaymentsState) => state.selectedPaymentId;
