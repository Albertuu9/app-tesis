import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './services/database.service';
import { TooltipDirective } from 'src/app/tooltip.directive';
import { ListCeramicsGenericComponent } from './components/list-ceramics-generic/list-ceramics-generic.component';
import { GenericSnackbarComponent } from './components/snackbar/generic-snackbar.component';
import { GenericModalComponent } from './components/generic-modal/generic-modal.component';
import { GridCeramicsGenericComponent } from './components/grid-ceramics-generic/grid-ceramics-generic.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ShowHideDirective } from './directives/show-hide.directive';

@NgModule({
  declarations: [
    TooltipDirective,
    GenericSnackbarComponent,
    GenericModalComponent,
    ListCeramicsGenericComponent,
    GridCeramicsGenericComponent,
    SpinnerComponent,
    ShowHideDirective
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    TooltipDirective,
    GenericSnackbarComponent,
    GenericModalComponent,
    ListCeramicsGenericComponent,
    GridCeramicsGenericComponent,
    SpinnerComponent,
    ShowHideDirective
  ],
  providers: [DatabaseService]
})
export class SharedModule { }
