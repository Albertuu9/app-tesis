import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'te-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent {

    @Input() data: any;
    @Output() sendData = new EventEmitter<any>();

    constructor() {
        
    }

    confirm() {
      this.sendData.emit(true);
    }

    cancel() {
      this.sendData.emit(false);
    }

}
