import { Component, ElementRef, EventEmitter, HostListener, inject, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matDarkModeOutline, matLightModeOutline } from '@ng-icons/material-icons/outline';
import { Router, RouterLink } from '@angular/router';
import { faSolidBars } from '@ng-icons/font-awesome/solid';

@Component( {
  selector: 'app-navbar',
  imports: [
    NgOptimizedImage,
    CommonModule,
    NgIcon,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  viewProviders: [ provideIcons( { matLightModeOutline, matDarkModeOutline, faSolidBars } ) ],
} )
export class NavbarComponent {
  router = inject( Router );
  elementRef = inject(ElementRef)

  isDarkMode: boolean = false;
  isMenuOpen: boolean = false;

  @Output() themeChangedEvent = new EventEmitter<boolean>;

  links = this.router.config
    .filter( route => route.title && route.title !== undefined );


  toggleDarkMode () {
    this.isDarkMode = !this.isDarkMode;
    this.themeChangedEvent.emit( this.isDarkMode );
  }

  toggleMenu () {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  clickOutside ( event: Event ) {
    if (!this.isMenuOpen) return

    const target = event.target as HTMLElement;
    const menuElement = this.elementRef.nativeElement.querySelector('.nav-menu');
    const toggleButtonElement = this.elementRef.nativeElement.querySelector('[data-menu-toggle]');

    if (!menuElement?.contains(target) && !toggleButtonElement?.contains(target)) {
      this.isMenuOpen = false;
    }
  }
}
