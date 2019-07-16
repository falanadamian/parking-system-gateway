import {Injectable} from "@angular/core";
import {ActionsSubject, select, Store} from "@ngrx/store";
import {CarStopsState, selectAllCarStops} from "./car-stops.reducer";
import * as CarStopsActions from "./car-stops.actions";
import {selectCurrentCarStop} from "../index";
import {CarStop} from "@parking-system/domain";


@Injectable({
  providedIn: 'root'
})
export class CarStopsFacade {

  constructor(
    private store: Store<CarStopsState>,
    private actions$: ActionsSubject
  ) {
  }

  allCarStops$ = this.store.pipe(select(selectAllCarStops));
  currentCarStop$ = this.store.pipe(select(selectCurrentCarStop));

  selectCarStop(carStopId: number) {
    this.store.dispatch(new CarStopsActions.CarStopSelected(carStopId));
  }

  fetchCarStops() {
    this.store.dispatch(new CarStopsActions.FetchCarStops());
  }

  createCarStop(carStop: CarStop) {
    this.store.dispatch(new CarStopsActions.CreateCarStop(carStop));
  }

  updateCarStop(carStop: CarStop) {
    this.store.dispatch(new CarStopsActions.UpdateCarStop(carStop));
  }

  deleteCarStop(carStop: CarStop) {
    this.store.dispatch(new CarStopsActions.DeleteCarStop(carStop));
  }


}

