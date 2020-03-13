import { Component, OnInit } from '@angular/core';
import {MovieService} from "../services/movie.service";
import {Movie} from "../models/movie.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public movieList:Movie[];
  private movieSubscription : Subscription

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.setMovieList();

    this.movieSubscription = this.movieService.movieSubject.subscribe((movies:Movie[])=>{this.movieList=movies});
  }

}
