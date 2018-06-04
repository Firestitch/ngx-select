import { Component } from '@angular/core';


@Component({
  selector: 'single-select-example',
  templateUrl: 'single-select-example.component.html'
})
export class SingleSelectExampleComponent {
  public items = [
    { name: 'Item 1', value: 1 },
    { name: 'Item 2', value: 2 },
    { name: 'Item 3', value: 3 }
  ];

  constructor() {
  }
}
