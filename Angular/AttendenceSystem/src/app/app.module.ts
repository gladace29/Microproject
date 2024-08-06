import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { FormsModule } from '@angular/forms';
import { AttendService } from './attend.service';
import {  HttpClientModule,provideHttpClient,withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AttendenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    AttendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
