import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbCardModule, NbInputModule, NbButtonModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MovieComponent } from './movie/movie.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MovieService} from "./services/movie.service";
import { NewMovieComponent } from './new-movie/new-movie.component';
import {AlertModule} from "./alert/alert.module";

import {ServerInterceptor} from "./services/server.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NewMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    AlertModule.forRoot(),

    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ServerInterceptor, multi: true },
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
