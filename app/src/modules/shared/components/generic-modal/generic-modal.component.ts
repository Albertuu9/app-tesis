import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'te-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent {

    @Input() data: any;

    constructor() {
        
    }

    confirm() {

    }

    cancel() {
        
    }

}
