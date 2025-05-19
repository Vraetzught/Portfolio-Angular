import {Component, EventEmitter, Output} from '@angular/core'
import {CommonModule, NgOptimizedImage} from '@angular/common'
import {NgIcon, provideIcons} from '@ng-icons/core'
import {matDarkModeOutline, matLightModeOutline} from '@ng-icons/material-icons/outline'

@Component({
  selector: 'app-navbar',
  imports: [
    NgOptimizedImage,
    CommonModule,
    NgIcon
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  viewProviders: [provideIcons({matLightModeOutline, matDarkModeOutline})]
})
export class NavbarComponent {
  isDarkMode: boolean = true
  @Output() themeChangedEvent = new EventEmitter<boolean>

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode
    this.themeChangedEvent.emit(this.isDarkMode)
  }
}
