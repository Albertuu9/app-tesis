
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './backoffice/dashboard/pages/dashboard.component';

const routes: Routes = [
  { path: 'backoffice', component: DashboardComponent },  // Ruta principal
  // { path: '**', component: NotFoundComponent }, // Página 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
