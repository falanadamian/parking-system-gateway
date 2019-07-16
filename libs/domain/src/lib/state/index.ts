import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromCarStops from './carstops/car-stops.reducer';
import {CarStop} from "@parking-system/domain";

export interface AppState {
  carStops: fromCarStops.CarStopsState;
}

export const reducers: ActionReducerMap<AppState> = {
  carStops: fromCarStops.carStopsReducer
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
