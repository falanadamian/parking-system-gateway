import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NxModule} from "@nrwl/angular";

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducers} from "./index";
import {EffectsModule} from "@ngrx/effects";
import {CarStopsEffects} from "./carstops/car-stops.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 15,}),
    EffectsModule.forRoot([
      CarStopsEffects
    ]),
  ]
})
export class StateModule {
}
