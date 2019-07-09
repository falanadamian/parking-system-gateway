import {Component, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'parking-ticketing-system-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private readonly SIDENAV_DISPLAY_BREAKPOINT: number = 600;

  @ViewChild('sidenav', {static: false}) sidenav;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.windowInnerWidth = event.target.innerWidth;
    if(!this.shouldDisplaySidenav(this.windowInnerWidth)) {
      this.sidenav.close();
    }
  }

  private windowInnerWidth: number;

  sidenavOpened: boolean = false;

  title = 'Parking ticketing system';

  links = [
    { path: '/ticket-machine', icon: 'directions_car', title: 'Ticket machine'}
  ];

  private shouldDisplaySidenav(screenWidth: number): boolean {
    return screenWidth > this.SIDENAV_DISPLAY_BREAKPOINT;
  }

  toggleSidenav() {
    if(this.shouldDisplaySidenav(this.windowInnerWidth)) {
      this.sidenav.toggle();
    }
  }

  ngOnInit() {
    this.windowInnerWidth = window.innerWidth;
    if(this.shouldDisplaySidenav(this.windowInnerWidth)){
      this.sidenavOpened = true;
    }
  }

}
