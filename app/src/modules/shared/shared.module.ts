import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './services/database.service';
import { TooltipDirective } from 'src/app/tooltip.directive';
import { GenericSnackbarComponent } from './components/snackbar/generic-snackbar.component';

@NgModule({
  declarations: [
    TooltipDirective,
    GenericSnackbarComponent
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    TooltipDirective,
    GenericSnackbarComponent
  ],
  providers: [DatabaseService]
})
export class SharedModule { }
