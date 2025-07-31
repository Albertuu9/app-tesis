import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BackofficeModule } from './backoffice/backoffice.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesktopModule } from './desktop/desktop.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BackofficeModule,
    DesktopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
