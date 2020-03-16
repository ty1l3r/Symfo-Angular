import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import {Movie} from"../models/movie.model";
import {Observable, Subject} from "rxjs";
import {AlertService} from "../alert/alert.service";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieList: Movie[];

  public movieSubject = new Subject<Movie[]>();

  constructor(private http: HttpClient,
              private router : Router,
              private alertService : AlertService) {  }

  public setMovieList(){
    this.getMovie2server().subscribe(
      (res)=>{
        this.movieList = res;
        this.emitMovieList();
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  public emitMovieList(){
    this.movieSubject.next(this.movieList.slice());
  }
  public getMovie2server():Observable<any>{
    return this.http.get('/movies');
  }

  public newMovie(movie){
      console.log(movie);
      this.http.post('/movies',movie).subscribe(
        (res)=>{
          this.alertService.setAlert('Film enregistré correctement', 'success');
          this.router.navigate(['/']);
        },
        (err)=>{
          console.log(err);
          this.alertService.setAlert('Une erreur s\'est produite','danger')
        }
      )
  }

}//EO MovieService
