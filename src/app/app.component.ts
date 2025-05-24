import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FooterComponent, NavbarComponent } from './ui-components';
import { NgClass } from '@angular/common';
import { routeTransition } from './route-transitions';

@Component( {
   selector: 'app-root',
   imports: [ RouterOutlet, NavbarComponent, FooterComponent, NgClass ],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css',
   animations: [ routeTransition ],
} )

export class AppComponent {
   title = 'NB Portfolio';

   isDarkMode: boolean = true;

   toggleDarkMode ( event: boolean ) {
      this.isDarkMode = event;
   }

   constructor ( protected route: ActivatedRoute ) {
   }
}
