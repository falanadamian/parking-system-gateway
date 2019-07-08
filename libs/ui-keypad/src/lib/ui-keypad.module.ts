import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeypadComponent} from './keypad/keypad.component';
import {FormsModule} from "@angular/forms";
import {AngularMaterialModule} from "@parking-ticketing-system/angular-material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ],
  declarations: [
    KeypadComponent
  ],
  exports: [
    KeypadComponent
  ]
})
export class UiKeypadModule {
}
