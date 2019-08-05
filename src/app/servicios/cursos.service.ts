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

    private datos: any[] = [
        ['Mazda', 2001, 2000],
        ['Pegeout', 2010, 5000],
        ['Honda Fit', 2009, 3000],
        ['Honda CRV', 2010, 6000],
    ];


    constructor() {
    }

    getCursos() {
        return this.curso;
    }

    getData() {
      return this.datos;
    }

    getExcel() {
    }


}
