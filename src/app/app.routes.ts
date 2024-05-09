import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';

export const routes: Routes = [
    {'path':'home',component:HomeComponent},
    {'path':'',redirectTo: '/home', pathMatch: 'full'},
    {'path':'about_us',component:AboutComponent},
    {'path':'our_services',component:ServicesComponent},
    {'path':'clients',component:ClientsComponent},
    {'path':'gallery',component:GalleryComponent},
    {'path':'contact',component:ContactComponent},
];
