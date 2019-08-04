import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    private curso: any[] = [
        {
          nombre: 'Español',
          info: 'Curso el cual se aprenderá diferentes temas de interes general',
          img: 'assets/img/espanol.png',
          FechaInicio: '2019-12-01',
          casa: "DC"
        },
        {
          nombre: 'Matematicas',
          info: 'En este curso se reforzará tus habilidades Logicas/Matemáticas',
          img: 'assets/img/matematicas.jpg',
          FechaInicio: '2019-12-01',
          casa: 'DC'
        }
      ];


    constructor() {
        console.log('Servicio listo para usarse');
    }

    getCursos() {
        return this.curso;
    }



}
