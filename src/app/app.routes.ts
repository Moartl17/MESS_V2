import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'person', component: PersonComponent }
];
