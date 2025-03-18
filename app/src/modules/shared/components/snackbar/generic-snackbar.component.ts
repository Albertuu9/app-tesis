import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'te-generic-snackbar',
  templateUrl: './generic-snackbar.component.html',
  styleUrls: ['./generic-snackbar.component.scss'],
  animations: [
    trigger('showHideSnackbar', [
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      state('oculto', style({ opacity: 0, transform: 'translateY(50px)' })),
      transition('oculto => visible', [
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition('visible => oculto', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(50px)' }))
      ])
    ])
  ]
})
export class GenericSnackbarComponent {

    @Input() genericData!: any;

}
