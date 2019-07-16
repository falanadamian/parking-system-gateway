import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {DataPersistence} from "@nrwl/angular";

import {CarStop, CarStopService} from "@parking-system/domain";

import {CarStopsState} from "./car-stops.reducer";

import {
  CarStopCreated,
  CarStopsActionTypes,
  CarStopsFetched,
  CarStopUpdated,
  CreateCarStop,
  FetchCarStops,
  UpdateCarStop
} from "./car-stops.actions";

import {map} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CarStopsEffects {

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CarStopsState>,
    private carStopService: CarStopService
  ) {
  }

  @Effect()
  loadCarStops$ = this.dataPersistence.fetch(CarStopsActionTypes.FetchCarStops, {
    run: (action: FetchCarStops, state: CarStopsState) => {
      return this.carStopService.getAll()
        .pipe(map((response: CarStop[]) => new CarStopsFetched(response)))
    },
    onError: (action: FetchCarStops, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  createCarStop$ = this.dataPersistence.pessimisticUpdate(CarStopsActionTypes.CreateCarStop, {
    run: (action: CreateCarStop, state: CarStopsState) => {
      return this.carStopService.create(action.payload)
        .pipe(map((response: CarStop) => new CarStopCreated(response)))
    },
    onError: (action: CreateCarStop, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateCarStop$ = this.dataPersistence.pessimisticUpdate(CarStopsActionTypes.UpdateCarStop, {
    run: (action: UpdateCarStop, state: CarStopsState) => {
      return this.carStopService.update(action.payload)
        .pipe(map((response: CarStop) => new CarStopUpdated(response)))
    },

    onError: (action: UpdateCarStop, error) => {
      console.error('Error', error);
    }
  });

}
