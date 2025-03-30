import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ceramic } from '../../models/dashboard.model';

@Component({
  selector: 'te-list-ceramics',
  templateUrl: './list-ceramics.component.html',
  styleUrls: ['./list-ceramics.component.scss']
})
export class ListCeramicsComponent {

    @Input() ceramics!: Ceramic | any;
    @Output() editCeramic = new EventEmitter<Number>();
    @Output() deleteCeramic = new EventEmitter<Number>();
    @Output() addCeramic = new EventEmitter<any>();

    constructor() {
        
    }

    ngOnInit() {
        console.log('ceramics', this.ceramics);
    }

    goToEdition(id: Number) {
        this.editCeramic.emit(id);
    }

    goToDelete(id: Number) {
        this.deleteCeramic.emit(id);
    }

    goToAddCeramic() {
        this.addCeramic.emit(true);
    }

}
