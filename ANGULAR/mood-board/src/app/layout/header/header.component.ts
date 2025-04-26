import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

})
export class HeaderComponent {
    headerOptions = [
      {
        path: "/",
        name: "Home"
      },
      {
        path: "/about",
        name: "About"
      },
      {
        path: "/contact",
        name: "Contact"
      },
    ]
    constructor() {}
}
