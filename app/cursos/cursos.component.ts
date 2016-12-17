import {Component} from '@angular/core';

import {CursosService} from './service/cursos.service';

@Component({
    moduleId: module.id,
    selector: 'cursos-lista',
    templateUrl: './template/cursos.component.html',
    providers: [CursosService],
})
export class CursosComponent {
    nome = "Meu Bem";
    cursos;

    constructor(service: CursosService){
        this.cursos = service.getCursos();
    }
}