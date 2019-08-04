import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { CursosService } from './servicios/cursos.service';



// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EspanolComponent } from './components/espanol/espanol.component';
import { MatematicasComponent } from './components/matematicas/matematicas.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoComponent } from './components/curso/curso.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EspanolComponent,
    MatematicasComponent,
    CursosComponent,
    CursoComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
