import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EspanolComponent } from './components/espanol/espanol.component';
import { MatematicasComponent } from './components/matematicas/matematicas.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'espanol', component: EspanolComponent },
    { path: 'matematicas', component: MatematicasComponent },
    { path: '**', component: HomeComponent },
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
