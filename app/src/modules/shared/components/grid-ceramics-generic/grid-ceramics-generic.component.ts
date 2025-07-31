import { Component, Input } from '@angular/core';
import { Ceramic } from '../../models/ceramic.model';

@Component({
  selector: 'te-grid-ceramics-generic',
  templateUrl: './grid-ceramics-generic.component.html',
  styleUrls: ['./grid-ceramics-generic.component.scss']
})
export class GridCeramicsGenericComponent {

    @Input() ceramics!: Ceramic | any;

}
