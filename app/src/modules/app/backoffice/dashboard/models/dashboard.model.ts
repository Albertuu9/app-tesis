export class Ceramic {
    ce_title: string = '';
    ce_description: string = '';
    ce_img_schedule: string = '';
    ce_location: string = '';
    ce_creation_date: string = '';
    ce_typology: number = -1;
    ce_measures: Object = {
        height: null,
        diameter: null,
        circumference: null
    }
    ce_school: string = '';
    ce_images: string = '';
    ce_property: string = '';
    ce_iconographic_elements: Array<string> = [];
    ce_musical_instruments: Array<string> = [];

    constructor(init?: Partial<Ceramic>) {
        Object.assign(this, init);
    }
}