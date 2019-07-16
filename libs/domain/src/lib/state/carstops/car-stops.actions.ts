import {Action} from '@ngrx/store';
import {CarStop} from '@parking-system/domain';

export enum CarStopsActionTypes {
  CarStopsActions = '[CarStops] Action',
  CarStopSelected = '[CarStops] Selected',
  FetchCarStops = '[CarStops] Fetch data',
  CarStopsFetched = '[CarStops] Data fetched',
  CreateCarStop = '[CarStops] Create data',
  CarStopCreated = '[CarStops] Data created',
  UpdateCarStop = '[CarStops] Update data',
  CarStopUpdated = '[CarStops] Data updated',
  DeleteCarStop = '[CarStops] Delete data',
  CarStopDeleted = '[CarStops] Data deleted',
}

export class CarStops implements Action {
  readonly type = CarStopsActionTypes.CarStopsActions;
}

export class CarStopSelected implements Action {
  readonly type = CarStopsActionTypes.CarStopSelected;

  constructor(public payload) {
  }
}

export class FetchCarStops implements Action {
  readonly type = CarStopsActionTypes.FetchCarStops;

  constructor() {
  }
}

export class CarStopsFetched implements Action {
  readonly type = CarStopsActionTypes.CarStopsFetched;

  constructor(public payload: CarStop[]) {
  }
}

export class CreateCarStop implements Action {
  readonly type = CarStopsActionTypes.CreateCarStop;

  constructor(public payload: CarStop) {
  }
}

export class CarStopCreated implements Action {
  readonly type = CarStopsActionTypes.CarStopCreated;

  constructor(public payload: CarStop) {
  }
}

export class UpdateCarStop implements Action {
  readonly type = CarStopsActionTypes.UpdateCarStop;

  constructor(public payload: CarStop) {
  }
}

export class CarStopUpdated implements Action {
  readonly type = CarStopsActionTypes.CarStopUpdated;

  constructor(public payload: CarStop) {
  }
}

export class DeleteCarStop implements Action {
  readonly type = CarStopsActionTypes.DeleteCarStop;

  constructor(public payload: CarStop) {
  }
}

export class CarStopDeleted implements Action {
  readonly type = CarStopsActionTypes.CarStopDeleted;

  constructor(public payload: CarStop) {
  }
}

export type CarStopsActions = CarStops
  | CarStopSelected
  | FetchCarStops
  | CarStopsFetched
  | CreateCarStop
  | CarStopCreated
  | UpdateCarStop
  | CarStopUpdated
  | DeleteCarStop
  | CarStopDeleted
  ;
