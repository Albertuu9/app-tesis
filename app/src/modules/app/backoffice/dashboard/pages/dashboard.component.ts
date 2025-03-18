import { Component } from '@angular/core';
import { BackofficeService } from '../../backoffice.service';
import { Ceramic } from '../models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  ceramic: Ceramic;
  typologies: any;
  selectedFile: any;
  snackbarData: any;
  constructor(private backofficeService: BackofficeService) {
    this.ceramic = new Ceramic();
    this.typologies = [];
    this.selectedFile = null;
    this.snackbarData = {
      text: '',
      color: ''
    }
  }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.getCeramics();
    this.getTypologies();
  }

  // listado de tipologías
  getTypologies() {
    this.backofficeService.getTypologies().subscribe((response: any) => {
      this.typologies = response;
      this.typologies.unshift({ty_id: -1, ty_name: 'Selecciona una tipología'});
    });
  }

  getCeramics() {
    this.backofficeService.getCeramics().subscribe((response: any) => {
      console.log('rreeeessssss', response);
    });
  }

  saveCeramics() {
    console.log('ceramic', this.ceramic);
    this.snackbarData = {
      color: '#198754',
      text: 'Datos guardados correctamente.',
      show: true
    }
    this.backofficeService.saveCeramic(this.ceramic, this.selectedFile).subscribe((response: any) => {
      setTimeout(() => {
        this.snackbarData.show = false;
      }, 2000);
    });
  }

  // emit events
  getCeramicData(event: any) {
    this.ceramic = event.ceramic;
    this.selectedFile = event.selectedFile;
    this.saveCeramics();
  }
}
