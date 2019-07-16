import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {CarStopsActions, CarStopsActionTypes} from "./car-stops.actions";
import {CarStop} from "@parking-system/domain";

export interface CarStopsState extends EntityState<CarStop> {
  selectedCarStopId: string | null;
}

export const adapter: EntityAdapter<CarStop> = createEntityAdapter<CarStop>();

export const initialState: CarStopsState = adapter.getInitialState({
  selectedCarStopId: null,
});

export function carStopsReducer(state = initialState, action: CarStopsActions): CarStopsState {

  switch (action.type) {
    case CarStopsActionTypes.CarStopSelected: {
      return Object.assign({}, state, {selectedCarStopId: action.payload});
    }
    case CarStopsActionTypes.CarStopsFetched: {
      return adapter.addAll(action.payload, state);
    }
    case CarStopsActionTypes.CarStopCreated: {
      return adapter.addOne(action.payload, state);
    }
    case CarStopsActionTypes.CarStopUpdated: {
      return adapter.upsertOne(action.payload, state);
    }
    case CarStopsActionTypes.CarStopDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

const {selectIds, selectEntities, selectAll, selectTotal} = adapter.getSelectors();
export const selectCarStopIds = selectIds;
export const selectCarStopEntities = selectEntities;
export const selectAllCarStops = selectAll;
export const selectCarStopTotal = selectTotal;
export const getSelectedCarStopId = (state: CarStopsState) => state.selectedCarStopId;
