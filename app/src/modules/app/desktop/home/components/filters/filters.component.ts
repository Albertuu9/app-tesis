import { Component } from '@angular/core';

@Component({
  selector: 'te-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

    title: any;

    constructor() {
        this.title = '';
    }

}
