import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  ceramics: any;

  constructor() {
    this.ceramics = {
      ce_title: '',
      ce_description: '',
      ce_img_schedule: null,
      ce_location: '',
      ce_creation_date:'',
      ce_category: '',
      ce_measures: '',
      ce_school: '',
      ce_images: '',
      ce_property: '',
      ce_iconographic_elements: '',
      ce_musical_instruments: '',
    }
  }

  ngOnInit() {

  }

  saveCeramics() {
    console.log('ceramics', this.ceramics);
  }
}
