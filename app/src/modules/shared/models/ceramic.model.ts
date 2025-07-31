export class Ceramic {
    ce_id?: number = 0;
    ce_title: string = '';
    ce_description: string = '';
    ce_img_schedule: string = '';
    ce_origin: Object | any = {
        id: -1,
        text: 'Selecciona una procedencia'
    };
    ce_creation_date: string = '';
    ce_material: Object | any = {
        id: -1,
        text: 'Selecciona un material'
    };
    ce_technique: Object | any = {
        id: -1,
        text: 'Selecciona una técnica'
    };
    ce_painted?: Object | any = {
        id: 1,
        text: 'Polícromo'
    };
    ce_measures: Object = {
        height: 0,
        diameter: 0,
        circumference: 0
    }
    ce_style: string = '';
    ce_images: string = '';
    ce_property: string = '';
    ce_iconographic_elements: Array<string> = [];
    ce_musical_instruments: Array<string> = [];

    constructor(init?: Partial<Ceramic>) {
        Object.assign(this, init);
    }
}