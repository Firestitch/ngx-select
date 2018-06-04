import { Component } from '@angular/core';


@Component({
  selector: 'empty-select-placeholder-action-example',
  templateUrl: 'empty-select-placeholder-action-example.component.html'
})
export class EmptySelectPlaceholderActionExampleComponent {

  public modal = '';
  public emptyItems = [];

  constructor() {
  }

  public selectPlaceholderAction() {
    if (!this.modal) {
      alert('Proceed to add item action');
    }
  }
}
