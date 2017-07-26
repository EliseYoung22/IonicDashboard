import { Component } from '@angular/core';

/**
 * Generated class for the GraphsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'graphs',
  templateUrl: 'graphs.html'
})
export class GraphsComponent {

  text: string;

  constructor() {
    console.log('Hello GraphsComponent Component');
    this.text = 'Hello World';
  }

}
