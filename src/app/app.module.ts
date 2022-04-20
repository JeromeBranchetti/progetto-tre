import { ResultComponent } from './search/result/result.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticazioneComponent } from './autenticazione/autenticazione.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminPageComponent } from './admin-page/admin-page.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SchedeComponent } from './search/schede/schede.component';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './condiviso/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    AutenticazioneComponent,
    NavbarComponent,
    AdminPageComponent,
    SearchPageComponent,
    NotFoundComponent,
    SchedeComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
