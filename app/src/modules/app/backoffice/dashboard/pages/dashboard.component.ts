import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { BackofficeService } from '../../backoffice.service';
import { Modal } from 'bootstrap';
import { Ceramic } from 'src/modules/shared/models/ceramic.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  ceramic: any;
  selectedFile: any;
  snackbarData: any;
  ceramics: Ceramic[];
  deleteModalInstance!: Modal;
  deleteModalData: { title: string; btnType: string, message: string; action: string };
  @ViewChild('deleteModal', { static: false }) modalElement!: ElementRef;
  @Output() addCeramicData = new EventEmitter<any>();

  constructor(private backofficeService: BackofficeService) {
    this.ceramic = new Ceramic();
    this.selectedFile = null;
    this.snackbarData = {
      text: '',
      color: ''
    }
    this.deleteModalData = {
      action: 'Eliminar',
      btnType: 'btn-danger',
      title: 'Confirmar Eliminación',
      message: '¿Estás seguro de que deseas eliminar este elemento? Esta acción no se puede deshacer.'
    }
    this.ceramics = [];
  }

  ngOnInit() {
    this.initData();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.deleteModalInstance = new Modal(this.modalElement.nativeElement);
    },1000);
  }

  initData() {
    this.getCeramics();
  }

  getCeramics() {
    this.backofficeService.getCeramics().subscribe((response: any) => {
      if(response.code == 200) {
        this.ceramics = response.data;
      }
    });
  }

  goToAddCeramic() {
    this.addCeramicData.emit(true);
  }

  deleteCeramic(id: Number) {
    this.ceramic = this.ceramics.filter((ceramic: any) => { return ceramic.ce_id === id })[0];
    this.deleteModalInstance.show();
  }

  editCeramic(id: Number) {
    this.ceramic = this.ceramics.filter((ceramic: any) => { return ceramic.ce_id === id })[0];
  }

  addCeramic(event: any) {
    if(event) {
      this.ceramic = new Ceramic();
    }
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

      if(!this.ceramic.ce_id) {
        this.ceramic = new Ceramic();
      }
      
      this.getCeramics();
    });
  }

  // emit events
  getCeramicData(event: any) {
    this.ceramic = event.ceramic;
    this.selectedFile = event.selectedFile;
    this.saveCeramics();
  }

  getDeleteData(data: any) {
    if(data) {
      this.snackbarData = {
        color: '#198754',
        text: 'Cerámica eliminada correctamente.',
        show: true
      }
      this.backofficeService.deleteCeramic(this.ceramic.ce_id).subscribe((response: any) => {
        setTimeout(() => {
          this.snackbarData.show = false;
        }, 2000);
        this.ceramic = new Ceramic();
        this.getCeramics();
      });
    }
    this.deleteModalInstance.hide();
  }
}
