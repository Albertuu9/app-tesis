import { DashboardComponent } from './../backoffice/pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'backoffice', component: DashboardComponent },  // Ruta principal
  // { path: '**', component: NotFoundComponent }, // Página 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
