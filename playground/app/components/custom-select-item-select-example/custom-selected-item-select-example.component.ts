import { Component } from '@angular/core';


@Component({
  selector: 'custom-selected-item-select-example',
  templateUrl: 'custom-selected-item-select-example.component.html',
  styleUrls: ['./custom-selected-item-select-example.component.scss']
})
export class CustomSelectedItemSelectExampleComponent {
  public model = null;

  public items = [
    {
      name: 'Riley Henderson',
      photo: 'https://randomuser.me/api/portraits/women/58.jpg'
    },
    {
      name: 'Francis Walters',
      photo: 'https://randomuser.me/api/portraits/men/40.jpg'
    },
    {
      name: 'Catherine Kelley',
      photo: 'https://randomuser.me/api/portraits/women/67.jpg'
    },
    {
      name: 'Brandy Black',
      photo: 'https://randomuser.me/api/portraits/women/54.jpg'
    },
    {
      name: 'Lily Campbell',
      photo: 'https://randomuser.me/api/portraits/women/8.jpg'
    }

  ];

  constructor() {}

}
