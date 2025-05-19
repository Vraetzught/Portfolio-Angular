import {Component, inject, OnDestroy, OnInit} from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { FooterComponent, NavbarComponent } from './ui-components'
import {NgClass} from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NB Portfolio';

  isDarkMode: boolean = true
  toggleDarkMode(event: boolean) {
    this.isDarkMode = event
  }

}
