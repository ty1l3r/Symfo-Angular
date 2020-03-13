import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MovieService} from "../services/movie.service";

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {
  public movieForm:FormGroup

  constructor(private formBuilder:FormBuilder,
              private movieService:MovieService) { }

  ngOnInit() {
    this.iniForm();
  }

  private iniForm(){
    this.movieForm = this.formBuilder.group(
      {
        title:['', Validators.required]
      }
    )
  }

  public onSubmit(){
    this.movieService.newMovie(this.movieForm.value);
  }

}
