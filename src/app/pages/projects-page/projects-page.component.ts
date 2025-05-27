import { Component } from '@angular/core';
import { ImageCarrouselComponent } from '../../ui-components';
import { CommonModule } from '@angular/common';
import { ProjectInfo } from '../../../interfaces';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faSolidLink } from '@ng-icons/font-awesome/solid';

@Component( {
   selector: 'app-projects-page',
   imports: [
      CommonModule,
      ImageCarrouselComponent,
      NgIcon,
   ],
   templateUrl: './projects-page.component.html',
   styleUrl: './projects-page.component.css',
   providers: [provideIcons({ faSolidLink })]
} )
export class ProjectsPageComponent {
   projects: ProjectInfo[] = [
      {
         name: 'Ometa Download Portal (stageopdracht)',
         images: [
            {
               path: 'assets/projects/download-portal/login.png',
               alt: 'Ometa Download Portal login pagina',
               info: 'Gebruikers kunnen inloggen met hun Microsoft account, of via eenmalige login code via e-mail',
            },
            {
               path: 'assets/projects/download-portal/home.png',
               alt: 'Ometa Download Portal home pagina',
               info: 'De home pagina toont alle versies van het ometa framework. Admin users kunnen versies toevoegen, aanpassen en verwijderen.'
            },
            {
               path: 'assets/projects/download-portal/details.png',
               alt: 'Ometa Download Portal details pagina',
               info: 'Op de details pagina kunnen gebruikers extra info over de versie bekijken, de bijhorende hotfixes downloaden (indien aanwezig) en doorklikken naar de documentatie.',
            },
            {
               path: 'assets/projects/download-portal/edit-version-popup.png',
               alt: 'Ometa Download Portal edit version popup',
               info: 'Een voorbeeld van de popup om een versie aan te passen.'
            },
            {
               path: 'assets/projects/download-portal/access-management.png',
               alt: 'Ometa Download Portal access management pagina',
               info: 'Administrators kunnen op deze pagina geautoriseerde domeinen en gebruikers beheren, administratoren beheren en e-mail adressen beheren voor de automatische emails.'
            },
            {
               path: 'assets/projects/download-portal/download-records.png',
               alt: 'Ometa Download Portal download records pagina',
               info: 'Administrators kunnen op deze pagina bekijken wie welke versies heeft gedownload en wanneer. Er kan gefilterd worden op (gedeeltelijk) versienummer, e-mailadres, Nuget ID, of datum.'
            }
         ],
         description: 'Een webapp voor Ometa, voor het intern en extern delen van versies van het Ometa Framework. Dit portaal is gebouwd met Angular 19 voor de frontend en ASP.NET voor de backend, gekoppeld aan een SQL-database, en gehost op Azure.Voor de bestandsopslag werd Azure Blob Storage ingezet. Omdat de toegang beperkt moest blijven tot betalende klanten, lag de focus sterk op beveiliging en toegangscontrole.',
         stack: [
            {
               name: 'frontend',
               items: [
                  'Angular v19',
                  'Tailwind CSS',
                  'DevExtreme',
                  'SemVer',
                  'Recaptcha v3',
                  'Angular Icons',
                  'Microsoft Authentication Library (MSAL)',
               ],
            },
            {
               name: 'backend',
               items: [
                  'ASP.NET Core 8',
                  'Azure SQL Server',
                  'Entity Framework Core',
                  'Microsoft Identity',
                  'Azure Blob Storage',
                  'Graph API',
               ],
            },
         ],
      },
      {
         name: 'Escape from Pig Castle',
         images: [
            {
               path: 'assets/projects/unity/main-menu.png',
               alt: 'Main Menu for Escape from Pig Castle',
            },
            {
               path: 'assets/projects/unity/level-screenshot-1.png',
               alt: 'Voorbeeld 1 van een kamer in Escape from Pig Castle',
            },
            {
               path: 'assets/projects/unity/level-screenshot-2.png',
               alt: 'Voorbeeld 2 van een kamer in Escape from Pig Castle',
            },

         ],
         description: 'Voor het vak \'IT Challenges\' werden we uitgedaagd omp een spel te bouwen met Unity. Ik heb gekozen om een 2D sidescroller te bouwen, gebaseerd op een tutorial van Pandemoneum. Ik heb niet louter de tutorial gevolgd, maar mijn eigen twist eraan gegeven, zoals power-ups gewijzigde mechanics. Om mezelf extra uit te dagen, heb ik een poging gedaan om gebruik te maken van principes die ik in mijn eerste jaar geleerd heb, zoals overerving. Ik nodig je graag uit om het spel te spelen! Ik ben benieuwd of je de geheime gang kan vinden...',
         stack: [],
         link: 'https://nb-portfolio.be/unity/escape-pig-castle/'
      },
      {
         name: 'Travel Manager (Groepswerk)',
         images: [
            {
               path: 'assets/projects/travel-manager/home-page.png',
               alt: 'Travel Manager home pagina',
            },
            {
               path: 'assets/projects/travel-manager/details.png',
               alt: 'Travel Manager details pagina',
               info: 'Hier kunnen gebruikers de details van een groepsreis bekijken, en afhankelijk van hun rol, hun kind inschrijven of zichzelf inschrijven als (hoofd)monitor'
            },
            {
               path: 'assets/projects/travel-manager/dashboard.png',
               alt: 'Travel Manager Administrator dashboard pagina',
               info: 'Travel Manager Administrator dashboard. Er zijn gelijkaardige dashboards voor andere rollen.'
            },
            {
               path: 'assets/projects/travel-manager/activiteiten-beheren.png',
               alt: 'Travel Manager activiteiten beheren pagina',
               info: 'Op deze pagina kunnen gebruikers met de juiste rol de verschillende activiteiten aanpassen die worden gebruikt in de verschillende groepsreizen.'
            }
            ],
         description: 'Deze website is ontwikkeld als groepswerk voor het vak \'MVC Projects\'. Het doel van de opdracht was om in groep een website te ontwikkelen voor een fictieve mutualiteit, waar zij groepsreizen kunnen aanbieden aan hun leden. Naast het ontwikkelen van hard skills, werden we uitgedaagd om te werken volgens de principes van Agile en Scrum, en om in te leren spelen op veranderende wensen van de klant. Op regelmatige momenten werden daily standups gehouden om elkaar up to date te houden van de vooruitgang en elke week was er een sprint meeting. Op bepaalde momenten tijdens de opdracht, waren er ook contactmomenten met de \'klant\', waar we de voortgang konden tonen en waar wijzigingen in de wensen van de klant konden bespreken.',
         stack: [
            {
               name: 'technologie',
               items: [
                  'ASP.NET Core 8',
                  'Entity Framework Core',
                  'Identity Framework',
                  'Razor Pages',
                  'Bootstrap',
                  'SQL Server',
               ],
            }
         ],
      }
   ];

   openProject( link: string | undefined ): void {
      if ( link ) {
         window.open( link, '_blank' );
      }

   }

   capitalizeFirst(str: string): string {
      if (!str) return str;
      return str.charAt(0).toUpperCase() + str.slice(1);
   }
}
