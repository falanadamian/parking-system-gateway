import {Component, Input, OnInit} from '@angular/core';
import {TicketPrintTemplate} from "@parking-system/domain";

@Component({
  selector: 'ui-ticket-print',
  templateUrl: './ticket-print.component.html',
  styleUrls: ['./ticket-print.component.scss']
})
export class TicketPrintComponent implements OnInit {

  @Input() template: TicketPrintTemplate;

  @Input() animated: boolean = false;
  @Input() animate: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
