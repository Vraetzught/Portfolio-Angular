import { Routes } from '@angular/router';
import {
  ContactPageComponent,
  ExperiencePageComponent,
  HobbiesPageComponent,
  HomePageComponent,
  ProjectsPageComponent,
} from './pages';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home' },
  { path: 'projects', component: ProjectsPageComponent, title: 'Projects' },
  { path: 'ervaring', component: ExperiencePageComponent, title: 'Ervaring' },
  { path: 'hobbies', component: HobbiesPageComponent, title: 'Hobbies' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact' },

];
