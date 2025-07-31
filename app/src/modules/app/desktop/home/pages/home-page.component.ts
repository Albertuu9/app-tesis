import { Component, ViewChild } from '@angular/core';
import { BackofficeService } from 'src/modules/app/backoffice/backoffice.service';
import { ShowHideDirective } from 'src/modules/shared/directives/show-hide.directive';
import { Ceramic } from 'src/modules/shared/models/ceramic.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  ceramics: Ceramic[];
  viewMode: String;

  @ViewChild('spinner') spinner!: ShowHideDirective;

  constructor(private backofficeService: BackofficeService) {
    this.ceramics = [];
    this.viewMode = 'grid';
  }

  ngAfterViewInit() {
    this.getCeramics();
  }

  getCeramics() {
    this.spinner.show();
    this.backofficeService.getCeramics().subscribe((response: any) => {
      if(response.code == 200) {
        this.spinner.hide();
        this.ceramics = response.data;
      }
    });
  }
  
  setViewMode(view: any) {
    this.viewMode = view;
  }

}
