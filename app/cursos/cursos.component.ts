import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'cursos-lista',
    templateUrl: './template/cursos.component.html'
})
export class CursosComponent {
    nome = 'Meu Bem';

    cursos = ['Angular 2', 'Java', 'Rosca'];
}