import {Component, EventEmitter} from 'angular2/core';
import {Movie} from './movie.model';

@Component({
  selector: 'new-movie',
  outputs:['onSubmitNewMovie'],
  template:`
  <h3>Add Movie</h3>
  <div class="movie-form">
    <input placeholder="Title">
    <input placeholder="Genre">
    <input placeholder="Director">
    <input placeholder="Year">
    <input placeholder="Rating">
    <button (click)="addMovie()" class="btn btn-warning btn-sm">Add</button>
  </div>
  `
})
export class NewMovieComponent {
  public onSubmitNewMovie: EventEmitter<Movie>;
  constructor(){
    this.onSubmitNewMovie = new EventEmitter();
  }
  addMovie(){
    console.log("Test Movie");
  }
}
