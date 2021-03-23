import { Component } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'my-angular-practices',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
  ],
})
export class AppComponent {
  title = 'angular-practices';
}
