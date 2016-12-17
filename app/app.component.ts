import { Component } from '@angular/core';

import { PrimeiroComponent } from './primeiro/primeiro.component';
import { CursosComponent } from './cursos/cursos.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Oi <b>MEU <span style="color:red;">BEM!</span></b></p>
        <primeiro></primeiro>
        <cursos-lista></cursos-lista>
    `,
    directives: [PrimeiroComponent, CursosComponent]
})
export class AppComponent { }
