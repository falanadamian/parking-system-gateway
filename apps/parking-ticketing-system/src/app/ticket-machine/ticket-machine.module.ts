import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TicketMachineRoutingModule} from './ticket-machine-routing.module';
import {TicketMachineComponent} from './ticket-machine/ticket-machine.component';
import {AngularMaterialModule} from "@parking-system/angular-material";
import {UiMachineInterfaceModule} from "@parking-system/ui-machine-interface";
import {UiKeypadModule} from "@parking-system/ui-keypad";
import {UiTicketPrintModule} from "@parking-system/ui-ticket-print";

@NgModule({
  declarations: [
    TicketMachineComponent
  ],
  imports: [
    CommonModule,
    TicketMachineRoutingModule,
    AngularMaterialModule,
    UiMachineInterfaceModule,
    UiKeypadModule,
    UiTicketPrintModule
  ],
  exports: [
    TicketMachineComponent
  ]
})
export class TicketMachineModule { }
