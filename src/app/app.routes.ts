import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'person', component: PersonComponent },
    { path: 'cv', component: ProjectsComponent },
    { path: '**', component: HomeComponent }
];
