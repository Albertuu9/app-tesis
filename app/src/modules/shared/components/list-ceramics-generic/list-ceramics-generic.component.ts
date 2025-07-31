import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ceramic } from '../../models/ceramic.model';

@Component({
  selector: 'te-list-ceramics-generic',
  templateUrl: './list-ceramics-generic.component.html',
  styleUrls: ['./list-ceramics-generic.component.scss']
})
export class ListCeramicsGenericComponent {

    @Input() ceramics!: Ceramic | any;
    @Input() type?: String;
    @Output() editCeramic = new EventEmitter<Number>();
    @Output() deleteCeramic = new EventEmitter<Number>();

    constructor() {
        
    }

    ngOnInit() {
    }

    goToEdition(id: Number) {
        this.editCeramic.emit(id);
    }

    goToDelete(id: Number) {
        this.deleteCeramic.emit(id);
    }

    getCeramicDescription(ceramic: Ceramic) {
        if(this.type === 'edition') {
            return ceramic.ce_description && ceramic.ce_description.length >= 120 ? ceramic.ce_description.substr(0, 120) + '...' : ceramic.ce_description
        }
        return ceramic.ce_description && ceramic.ce_description.length >= 220 ? ceramic.ce_description.substr(0, 220) + '...' : ceramic.ce_description
    }

}
