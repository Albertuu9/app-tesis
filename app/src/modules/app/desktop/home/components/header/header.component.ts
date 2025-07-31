import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'te-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  viewMode: any;
  @Output() sendViewMode = new EventEmitter<string>();

  constructor() {
    this.viewMode = 'grid';
  }

  ngOnInit() {
    
  }

  setViewMode() {
    this.viewMode = this.viewMode == 'list' ? 'grid' : 'list';
    this.sendViewMode.emit(this.viewMode);
  }

}
