import { Component } from '@angular/core';

@Component({
  selector: 'ms-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})

export class NavComponent {
  handleClick(event: any) {
    console.log("ms-nav-button-clicked");
  }
}
