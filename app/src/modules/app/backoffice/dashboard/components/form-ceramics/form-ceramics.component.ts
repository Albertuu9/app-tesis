import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Ceramic } from '../../models/dashboard.model';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'te-form-ceramics',
  templateUrl: './form-ceramics.component.html',
  styleUrls: ['./form-ceramics.component.scss']
})
export class FormCeramicsComponent {

    @Input() ceramic!: Ceramic | any;
    @Output() getCeramicData = new EventEmitter<Object>();
    iconographic_element: string;
    musical_instrument: string;
    selectedFile: any;
    fileName: string = '';
    materials: any;
    origins: any;
    techniques: any;
    painted_techniques: any;

    constructor() {
        this.iconographic_element = '';
        this.musical_instrument = '';
        this.materials = [];
        this.origins = [];
        this.techniques = [];
        this.painted_techniques = [];
    }

    ngOnInit() {
        this.getMaterials();
        this.getOrigins();
        this.getTechniques();
        this.getPaintedTechniques();
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

    // listado de materiales
    getMaterials() {
        this.materials = [
        {
            id: -1,
            text: 'Selecciona un material'
        },
        {
            id: 1,
            text: 'Cerámico'
        },
        {
            id: 2,
            text: 'Pétreo'
        },
        {
            id: 3,
            text: 'Estuco'
        },
        {
            id: 4,
            text: 'Otros'
        }
        ];
    }

    // listado de orígenes
    getOrigins() {
        this.origins = [
            {
                id: -1,
                text: 'Selecciona un origen'
            },
            {
                id: 1,
                text: 'Costa Sur'
            },
            {
                id: 2,
                text: 'Tierras Altas'
            },
            {
                id: 3,
                text: 'Tierras Bajas centrales'
            },
            {
                id: 4,
                text: 'Tierras Bajas del Norte'
            },
            {
                id: 5,
                text: 'Tierras Bajas del Sur'
            },
            {
                id: 6,
                text: 'Tierras Bajas Mayas del Sur'
            }
        ]
    }

    // obtener las técnicas
    getTechniques() {
        this.techniques = [
            {
                id: -1,
                text: 'Selecciona una técnica'
            },
            {
                id: 1,
                text: 'Inciso'
            },
            {
                id: 2,
                text: 'Tallado'
            },
            {
                id: 3,
                text: 'Moldeado'
            },
            {
                id: 4,
                text: 'Perforado'
            },
            {
                id: 5,
                text: 'Compuestos'
            },
            {
                id: 6,
                text: 'Dibujado en carbón'
            },
            {
                id: 7,
                text: 'Pintado'
            }
        ]
    }

    // obtener técnicas de pintado
    getPaintedTechniques() {
        this.painted_techniques = [
            {
                id: 1,
                text: 'Polícromo'
            },
            {
                id: 2,
                text: 'Monócromo'
            },
            {
                id: 3,
                text: 'Blanco y negro'
            }
        ]
    }


    checkFormIsValid(data: Ceramic) {
        let invalid = false;
        if(!data.ce_iconographic_elements.length || !data.ce_musical_instruments.length || !this.fileName || data.ce_material.id == -1 || !data.ce_title || !data.ce_description) {
            invalid = true;
        }
        return invalid;
    }

    onMaterialChange(event: Event) {
        const selectedValue = (event.target as HTMLSelectElement).value;
      
        // Si necesitas acceder al objeto completo:
        const selectedMaterial = this.materials.find((mat: any) => mat.id === +selectedValue);
      
        // También podrías actualizar algo más si lo necesitas:
        this.ceramic.ce_material = selectedMaterial;
    }

    onOriginChange(event: Event) {
        const selectedValue = (event.target as HTMLSelectElement).value;
      
        // Si necesitas acceder al objeto completo:
        const selectedOrigin = this.origins.find((or: any) => or.id === +selectedValue);
      
        // También podrías actualizar algo más si lo necesitas:
        this.ceramic.ce_origin = selectedOrigin;
    }

    onTechniqueChange(event: Event) {
        const selectedValue = (event.target as HTMLSelectElement).value;
      
        // Si necesitas acceder al objeto completo:
        const selectedOrigin = this.techniques.find((te: any) => te.id === +selectedValue);
      
        // También podrías actualizar algo más si lo necesitas:
        this.ceramic.ce_technique = selectedOrigin;
    }

    deleteTag(tag: string, key: string) {
        const index = this.ceramic[key].indexOf(tag);
        if (index !== -1) {
        this.ceramic[key].splice(index, 1);
        }
    }

    clearFields(form: NgForm) {
        this.ceramic = new Ceramic();
        this.selectedFile = null;
        this.fileName = '';
        this.resetFormFields(form);
    }

    private resetFormFields(form: NgForm) {
        this.ceramic = new Ceramic();
        this.selectedFile = null;
        this.fileName = '';
        form.resetForm();
    }

    saveCeramics(form: NgForm) {
        const objectToSave = {
            ceramic: this.ceramic,
            selectedFile: this.selectedFile
        }
        this.getCeramicData.emit(objectToSave);
        if(!this.ceramic.ce_id) {
            this.resetFormFields(form);
        }
    }

}
