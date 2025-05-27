import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faSolidChevronDown, faSolidChevronUp } from '@ng-icons/font-awesome/solid';
import {
   diAngularOriginal,
   diAzureOriginal,
   diBootstrapOriginal,
   diCsharpOriginal,
   diCss3Original,
   diDockerOriginal,
   diGitOriginal,
   diHtml5Original,
   diJavascriptOriginal,
   diMicrosoftsqlserverOriginal,
   diMongodbOriginal,
   diNextjsOriginal,
   diPostgresqlOriginal,
   diPrismaOriginal,
   diReactOriginal,
   diRiderOriginal,
   diTailwindcssOriginal,
   diTypescriptOriginal,
   diUnityOriginal,
   diWebstormOriginal,
   diWordpressOriginal,
} from '@ng-icons/devicon/original';

@Component( {
   selector: 'app-experience-page',
   imports: [ CommonModule, NgIcon ],
   templateUrl: './experience-page.component.html',
   styleUrl: './experience-page.component.css',
   providers: [ provideIcons( {
      faSolidChevronDown,
      faSolidChevronUp,
      diCsharpOriginal,
      diJavascriptOriginal,
      diTypescriptOriginal,
      diHtml5Original,
      diCss3Original,
      diAngularOriginal,
      diReactOriginal,
      diNextjsOriginal,
      diBootstrapOriginal,
      diTailwindcssOriginal,
      diMicrosoftsqlserverOriginal,
      diMongodbOriginal,
      diPostgresqlOriginal,
      diPrismaOriginal,
      diUnityOriginal,
      diGitOriginal,
      diAzureOriginal,
      diDockerOriginal,
      diWordpressOriginal,
      diRiderOriginal,
      diWebstormOriginal,
   } ) ],
} )
export class ExperiencePageComponent {
   languages = [
      { name: 'Nederlands', proficiency: 'Moedertaal', score: '90' },
      { name: 'Engels', proficiency: 'Vloeiend', score: '85' },
      { name: 'Frans', proficiency: 'Basis', score: '50' },
      { name: 'Duits', proficiency: 'Basis', score: '40' },
      { name: 'Japans', proficiency: 'Noties', score: '10' },
   ];

   programmingLanguages = [
      { name: 'C#', iconName: 'diCsharpOriginal' },
      { name: 'JavaScript', iconName: 'diJavascriptOriginal' },
      { name: 'TypeScript', iconName: 'diTypescriptOriginal' },
      { name: 'HTML', iconName: 'diHtml5Original' },
      { name: 'CSS', iconName: 'diCss3Original' },
   ];

   frameworks = [
      {
         name: '.NET',
         sub: [
            { name: 'ASP.NET (API)' },
            { name: 'ASP.NET (MVC)' },
            { name: '.NET MAUI' },
         ],
      },
      {
         name: 'JS Frameworks & UI libraries',
         sub: [
            { name: 'Angular', iconName: 'diAngularOriginal' },
            { name: 'React', iconName: 'diReactOriginal' },
            { name: 'Next.js', iconName: 'diNextjsOriginal' },
            { name: 'Bootstrap', iconName: 'diBootstrapOriginal' },
            { name: 'Tailwind CSS', iconName: 'diTailwindcssOriginal' },
            { name: 'DevExtreme' },
            { name: 'ShadCN' },
         ],
      },
      {
         name: 'Database & ORMs',
         sub: [
            { name: 'MSSQL', iconName: 'diMicrosoftsqlserverOriginal' },
            { name: 'Entity Framework Core' },
            { name: 'Microsoft Identity' },
            { name: 'MongoDB', iconName: 'diMongodbOriginal' },
            { name: 'PostgreSQL', iconName: 'diPostgresqlOriginal' },
            { name: 'Prisma', iconName: 'diPrismaOriginal' },
         ],
      },
      {
         name: 'Game Development',
         sub: [
            { name: 'Unity', iconName: 'diUnityOriginal' },
         ],
      },
   ];

   tools = [
      { name: 'Git', iconName: 'diGitOriginal' },
      { name: 'Azure', iconName: 'diAzureOriginal' },
      { name: 'Docker', iconName: 'diDockerOriginal' },
      { name: 'WordPress', iconName: 'diWordpressOriginal' },
   ];

   editors = [
      { name: 'JetBrains Rider', iconName: 'diRiderOriginal' },
      { name: 'JetBrains Webstorm', iconName: 'diWebstormOriginal' },
   ];

   schooling = [
      {
         name: 'Graduaat Programmeren',
         institution: 'Thomas More Geel',
         info: 'Verwacht af te studeren juni 2025',
      }, {
         name: 'Prof. Bachelor Leerkracht Secundair Onderwijs',
         institution: 'Groep T Leuven',
         info: 'Niet voltooid',
      },
      {
         name: 'TSO - Chemie',
         institution: 'Damiaan Instituut Aarschot',
         start: 'September 2007',
         info: 'Afgestudeerd juni 2009',
      },
   ];

   jobs = [
      {
         name: 'Sort Control Senior Officer',
         company: 'DHL Aviation',
         location: 'Melsbroek',
         start: '2020',
         end: '2023',
         description: 'In deze functie was ik verantwoordelijk voor de monitoring van de automatische sorteermachine tijdens productie, alsook het opzetten en onderhouden van de sorteerplannen.',
         skills: [
            'Kalm en correct reageren bij problemen',
            'Communicatie met operationele teams',
         ],
      },
      {
         name: 'CIS Facilitator',
         company: 'DHL Aviation',
         location: 'Melsbroek',
         start: '2017',
         end: '2023',
         description: 'Als CIS Facilitator, gaf ik één tot tweemaal per jaar vorming aan nieuwe werknemers, waar zij kennis namen van de geschiedenis en filosofie van het bedrijf en werd er algemene kennis meegegeven over douanprocessen en het globale netwerk. Deze functie liep parallel met mijn hoofdfunctie.',
         skills: [
            'Spreken voor een groep',
            'Presentaties structureel begrijpen met randinformatie',
         ],
      },
      {
         name: 'Customer Service / Tracing Agent',
         company: 'DHL Aviation',
         location: 'Melsbroek',
         start: '2017',
         end: '2020',
         description: 'Als Customer Service / Tracing Agent, was het mijn taak om belangrijke zendingen op te volgen, alsook uit de tracking informatie achterhalen wat er met een zending gebeurt. Ons team was het eerste contactpunt voor andere faciliteiten en klantendiensten wereldwijd. Wanneer er speciale verzoeken waren voor een zending, zoals een adreswijziging of speciale levering, waren wij verantwoordelijk om toe te zien op de correcte afhandeling van de aanvraag.',
         skills: [
            'Contact met externe diensten',
            'Rechtstreeks contact met klanten',
            'Aan de hand van checkpoints met beperkte informatie het traject van een zending kunnen reconstruëren (abstract redeneren)',
         ],
      },
      {
         name: 'FED Agent',
         company: 'DHL Aviation',
         location: 'Zaventem',
         start: '2015',
         end: '2017',
         description: 'Als FED Agent, was het mijn taak om zendingen te behandelen die hun normaal traject niet konden vervolgen, hetzij door dataproblemen, douane handling of beschadigde labeling.',
         skills: [
            'Vertrouwd zijn met douaneprocessen',
            'Prioriteren van zendingen afhankelijk van complexiteit van het probleem en urgentie van de zending',
         ],
      },
      {
         name: 'Dangerous Goods Clerk',
         company: 'DHL Aviation',
         location: 'Zaventem',
         start: '2014',
         end: '2015',
         description: 'In de functie van Dangerous Goods Clerck, was mijn voornaamste taak het controlleren en correct laden van potentieel gevaarlijke producten, maar ook levende dieren en medisch nucleair materiaal, voor luchttransport.',
         skills: [
            'Classificatie van risico\'s volgens internationale regelgeving',
            'Nauwkeurigheid en aandacht voor detail',
         ],
      },
      {
         name: 'Loader / Sorter',
         company: 'DHL Aviation',
         location: 'Zaventem',
         start: '2012',
         end: '2014',
         description: 'Als Loader/sorter bij DHL Aviation NV, was het mijn taak om vliegtuigcontainers te laden en lossen. Bij het laden van een container is het belangrijk rekening te houdend met prioriteiten, orientatie en stevigheid. Bij het lossen van de containers werd er vooral aandacht besteed aan uitfilteren van goederen die manueel gesorteerd moesten worden, zoals goederen van glas, onregelmatige vormen, gevaarlijke goederen, etc.',
         skills: [
            'Identificatie en sortering',
            'Kwaliteitscontrole',
         ],
      }, {
         name: 'Mechanieker / Verkoper',
         company: 'De Fietsgarage',
         location: 'Holsbeek',
         start: '2019',
         end: '2012',
         description: 'In de Fietsgarage te Holsbeek was ik in de eerste plaats verantwoordelijk voor montage en reparatie van fietsen. Daarnaast werd mij ook gevraagd om bij te springen op drukke momenten als algemene winkelbediende om klanten te helpen.',
         skills: [
            'Klantenservice',
            'Klantenrelaties',
            'Via gerichte vragen het achterhalen welk product het beste past bij de klant',
         ],
      },
   ];

   openSkillSection: string | null = this.languages[0].name;
   openSkillSubSection: string | null = this.programmingLanguages[0].name;
   openExperienceSection: string | null = this.programmingLanguages[0].name;
   openWorkSection: string | null = this.jobs[0].name;

   toggleOpenSection ( section: string, property: 'openSkillSection' | 'openSkillSubSection' | 'openExperienceSection' | 'openWorkSection' ) {
      this[property] = this[property] === section ? null : section;
   }
}
