import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieComponent} from "./movie/movie.component";
import {NewMovieComponent} from "./new-movie/new-movie.component";


const routes: Routes = [
  {path:'', component:MovieComponent},
  {path: 'new', component:NewMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
