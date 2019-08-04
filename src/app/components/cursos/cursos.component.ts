import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../servicios/cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[] = [];

  // tslint:disable-next-line: variable-name
  constructor( private router: Router, private _cursoService: CursosService, ) { }

  ngOnInit() {
    this.cursos = this._cursoService.getCursos();

    console.log( this.cursos );
  }

  // Funcion para obtener un Curso
  VerCurso( idx: number ) {
    this.router.navigate(['/curso', idx]);
  }

}
