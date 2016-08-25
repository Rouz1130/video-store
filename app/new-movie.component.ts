import {Component, EventEmitter} from 'angular2/core';
import {Movie} from './movie.model';

@Component({
  selector: 'new-movie',
  outputs:['onSubmitNewMovie'],
  template:`
  <h3>Add Movie</h3>
  <div class="movie-form">
    <input placeholder="Title" #newTitle>
    <input placeholder="Genre" #newGenre>
    <input placeholder="Director" #newDirector>
    <input placeholder="Year" #newYear>
    <input placeholder="Rating" #newRating>
    <button (click)="addMovie(newTitle, newGenre, newDirector, newYear, newRating)" class="btn btn-warning btn-sm">Add</button>
  </div>
  `
})
export class NewMovieComponent {
  public onSubmitNewMovie: EventEmitter<Movie>;
  constructor(){
    this.onSubmitNewMovie = new EventEmitter();
  }
  addMovie(addTitle: HTMLInputElement, addGenre:HTMLInputElement, addDirector:HTMLInputElement, addYear:HTMLInputElement, addRating:HTMLInputElement){
    var newMovie = new Movie(addTitle.value, addGenre.value, addDirector.value, addYear.value, addRating.value );
    this.onSubmitNewMovie.emit(newMovie);
    addTitle.value = "";
    addGenre.value = "";
    addDirector.value = "";
    addYear.value = "";
    addRating.value = "";
  }
}
