import { Routes } from '@angular/router';
import {
   ContactPageComponent,
   ExperiencePageComponent,
   HobbiesPageComponent,
   HomePageComponent,
   ProjectsPageComponent,
} from './pages';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
   { path: '', component: HomePageComponent, title: 'NB Portfolio - Home', data: { menuTitle: 'Home' } },
   {
      path: 'projects',
      component: ProjectsPageComponent,
      title: 'NB Portfolio - Projects',
      data: { menuTitle: 'Projects' },
   },
   {
      path: 'ervaring',
      component: ExperiencePageComponent,
      title: 'NB Portfolio - Ervaring',
      data: { menuTitle: 'Ervaring' },
   },
   {
      path: 'hobbies',
      component: HobbiesPageComponent,
      title: 'NB Portfolio - Hobbies',
      data: { menuTitle: 'Hobbies' },
   },
   {
      path: 'contact',
      component: ContactPageComponent,
      title: 'NB Portfolio - Contact',
      data: { menuTitle: 'Contact' },
   },
   { path: `**`, component: NotFoundPageComponent, title: `404 - Page Not Found` },

];
