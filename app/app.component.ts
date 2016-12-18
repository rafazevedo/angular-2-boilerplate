import { Component } from '@angular/core';

import {DataBindingComponent} from './data-binding/data-binding.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 - Com a Tia Loiane</h1>
        <data-binding></data-binding>
    `,
    directives: [DataBindingComponent,]
})
export class AppComponent { }
