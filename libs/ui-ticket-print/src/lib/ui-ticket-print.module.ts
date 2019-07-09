import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketPrintComponent } from './ticket-print/ticket-print.component';
import {AngularMaterialModule} from "@parking-system/angular-material";

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [
    TicketPrintComponent
  ],
  exports: [
    TicketPrintComponent
  ]
})
export class UiTicketPrintModule {}
