import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketMachineComponent} from "./ticket-machine/ticket-machine.component";

const routes: Routes = [
  {path: "", component: TicketMachineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketMachineRoutingModule { }
