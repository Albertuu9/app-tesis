import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/modules/shared/shared.module';
import { BackofficeService } from './backoffice.service';
import { DashboardComponent } from './dashboard/pages/dashboard.component';
import { FormCeramicsComponent } from './dashboard/components/form-ceramics/form-ceramics.component';
import { ListCeramicsComponent } from './dashboard/components/list-ceramics/list-ceramics.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FormCeramicsComponent,
    ListCeramicsComponent
  ],  // Asegurar que el componente está aquí
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [BackofficeService]
})
export class BackofficeModule { }