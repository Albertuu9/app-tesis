import { Component, ElementRef, ViewChild } from '@angular/core';
import { BackofficeService } from '../../backoffice.service';
import { Ceramic } from '../models/dashboard.model';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  ceramic: any;
  typologies: any;
  selectedFile: any;
  snackbarData: any;
  ceramics: Ceramic[];
  deleteModalInstance!: Modal;
  @ViewChild('deleteModal', { static: false }) modalElement!: ElementRef;
  deleteModalData: { title: string; message: string; };

  constructor(private backofficeService: BackofficeService) {
    this.ceramic = new Ceramic();
    this.typologies = [];
    this.selectedFile = null;
    this.snackbarData = {
      text: '',
      color: ''
    }
    this.deleteModalData = {
      title: 'Confirmar Eliminación',
      message: '¿Estás seguro de que deseas eliminar este elemento? Esta acción no se puede deshacer.'
    }
    this.ceramics = [];
  }

  ngOnInit() {
    this.initData();
  }

  ngAfterViewInit() {
    this.deleteModalInstance = new Modal(this.modalElement.nativeElement);
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
      if(response.code == 200) {
        this.ceramics = response.data;
      }
    });
  }

  deleteCeramic(id: Number) {
    this.ceramic = this.ceramics.filter((ceramic: any) => { return ceramic.ce_id === id })[0];
    this.deleteModalInstance.show();
  }

  editCeramic(id: Number) {
    console.log('id', id);
    this.ceramic = this.ceramics.filter((ceramic: any) => { return ceramic.ce_id === id })[0];
    console.log('ceramic', this.ceramic);
  }

  addCeramic(event: any) {
    if(event) {
      this.ceramic = new Ceramic();
    }
  }

  saveCeramics() {
    console.log('ceramic', this.ceramic);
    this.snackbarData = {
      action: 'Eliminar',
      color: '#198754',
      text: 'Datos guardados correctamente.',
      show: true
    }
    this.backofficeService.saveCeramic(this.ceramic, this.selectedFile).subscribe((response: any) => {
      setTimeout(() => {
        this.snackbarData.show = false;
      }, 2000);
      this.getCeramics();
    });
  }

  // emit events
  getCeramicData(event: any) {
    this.ceramic = event.ceramic;
    this.selectedFile = event.selectedFile;
    this.saveCeramics();
  }
}
