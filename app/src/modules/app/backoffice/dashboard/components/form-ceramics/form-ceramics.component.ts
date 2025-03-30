import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Ceramic } from '../../models/dashboard.model';

@Component({
  selector: 'te-form-ceramics',
  templateUrl: './form-ceramics.component.html',
  styleUrls: ['./form-ceramics.component.scss']
})
export class FormCeramicsComponent {

    @Input() ceramic!: Ceramic | any;
    @Input() typologies!: any;
    @Output() getCeramicData = new EventEmitter<Object>();
    iconographic_element: string;
    musical_instrument: string;
    selectedFile: any;
    fileName: string = '';

    constructor() {
        this.iconographic_element = '';
        this.musical_instrument = '';
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes && changes['ceramic'] && changes['ceramic'].currentValue) {
            this.selectedFile = changes['ceramic'].currentValue.ce_img_schedule ? changes['ceramic'].currentValue.ce_img_schedule : '';
            this.fileName = this.selectedFile ? this.selectedFile.match(/[^/]+$/)[0] : '';
        }
    }

    // upload file functions
    onFileSelected(event: any) {
        this.selectedFile = event.target.files[0];
        this.fileName = this.selectedFile?.name;
    }


    // add/delete chips functions
    saveChips(key: string) {
        if(key == 'ce_iconographic_elements') {
        if(!this.iconographic_element) {
            return;
        }
        this.ceramic[key].push(this.iconographic_element);
        this.iconographic_element= '';
        } else {
        if(!this.musical_instrument) {
            return;
        }
        this.ceramic[key].push(this.musical_instrument);
        this.musical_instrument= '';
        }
    }

    checkFormIsValid(data: Ceramic) {
        let invalid = false;
        if(!data.ce_iconographic_elements.length || !data.ce_musical_instruments.length || !this.fileName || data.ce_typology == -1 || !data.ce_title || !data.ce_description) {
            invalid = true;
        }
        return invalid;
    }

    deleteTag(tag: string, key: string) {
        const index = this.ceramic[key].indexOf(tag);
        if (index !== -1) {
        this.ceramic[key].splice(index, 1);
        }
    }

    clearFields() {
        this.ceramic = new Ceramic();
        this.selectedFile = null;
        this.fileName = '';
    }

    saveCeramics() {
        console.log('entrraaaaa');
        const objectToSave = {
            ceramic: this.ceramic,
            selectedFile: this.selectedFile
        }
        this.getCeramicData.emit(objectToSave);
    }

}
