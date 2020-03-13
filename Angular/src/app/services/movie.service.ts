import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import {Movie} from"../models/movie.model";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieList: Movie[];

  public movieSubject = new Subject<Movie[]>();

  constructor(private http: HttpClient) {  }

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
    return this.http.get('https://localhost:8000/movies');
  }

}//EO MovieService
