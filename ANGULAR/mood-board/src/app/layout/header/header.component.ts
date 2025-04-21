import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

})
export class HeaderComponent {
    headerOptions = [
      {
        path: "home",
        name: "Home"
      },
      {
        path: "about",
        name: "About"
      },
      {
        path: "contact",
        name: "Contact"
      },
    ]
    constructor() {}
}
