import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/modules/shared/shared.module';
import { DesktopService } from './desktop.service';
import { HomePageComponent } from './home/pages/home-page.component';
import { HeaderComponent } from './home/components/header/header.component';
import { FiltersComponent } from './home/components/filters/filters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  providers: [DesktopService]
})
export class DesktopModule { }