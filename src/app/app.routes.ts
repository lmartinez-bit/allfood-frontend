import { Routes } from '@angular/router';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'aboutus', component: AboutusComponent},
    { path: 'contactus', component: ContactusComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' } // Ruta predeterminada
  ];

