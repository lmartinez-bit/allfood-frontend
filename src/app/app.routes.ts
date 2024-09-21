import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { PersonalizacionPlatoComponent } from './pages/personalizacion-plato/personalizacion-plato.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'personalizacion-plato', component: PersonalizacionPlatoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } // Ruta comodín para rutas no encontradas
];
