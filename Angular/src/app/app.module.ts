import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbCardModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MovieComponent } from './movie/movie.component';
import {MovieService} from "./services/movie.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    NbCardModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
