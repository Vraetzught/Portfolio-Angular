import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faSolidPhone } from '@ng-icons/font-awesome/solid';
import {
   diAngularOriginal,
   diCsharpOriginal,
   diDotnetcoreOriginal,
   diMicrosoftsqlserverOriginal,
   diTypescriptOriginal,
} from '@ng-icons/devicon/original';
import { Router, RouterLink } from '@angular/router';

@Component( {
  selector: 'app-home-page',
   imports: [ NgOptimizedImage, NgIcon, CommonModule, RouterLink ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  viewProviders: [ provideIcons( {
    faSolidPhone,
    diAngularOriginal,
    diTypescriptOriginal,
    diCsharpOriginal,
    diDotnetcoreOriginal,
    diMicrosoftsqlserverOriginal,
  } ) ],
} )
export class HomePageComponent {
  router = inject(Router)

  skills = [
    {
      name: 'Angular v19',
      icon: 'diAngularOriginal',
    },
    {
      name: 'TypeScript',
      icon: 'diTypescriptOriginal',
    },
    {
      name: 'C# 12',
      icon: 'diCsharpOriginal',
    },
    {
      name: '.NET 8',
      icon: 'diDotnetcoreOriginal',
    },
    {
      name: 'SQL Server',
      icon: 'diMicrosoftsqlserverOriginal',
    },
  ]
}
