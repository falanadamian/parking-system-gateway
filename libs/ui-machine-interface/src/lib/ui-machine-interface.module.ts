import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MachineInterfaceComponent} from './machine-interface/machine-interface.component';
import {FormsModule} from "@angular/forms";
import {AngularMaterialModule} from "@parking-system/angular-material";
import {UiKeypadModule} from "@parking-system/ui-keypad";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    UiKeypadModule,
  ],
  declarations: [
    MachineInterfaceComponent
  ],
  exports: [
    MachineInterfaceComponent
  ]
})
export class UiMachineInterfaceModule {
}
