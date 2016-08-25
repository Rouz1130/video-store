import { Movie } from './movie.model';
import { Component, EventEmitter } from 'angular2/core';
import { MovieComponent } from './movie.component';
import { NewMovieComponent } from './new-movie.component';

@Component({
  selector: 'movie-list',
  inputs: ['movieList'],
  outputs: ['onMovieSelect'],
  directives: [MovieComponent, NewMovieComponent],
  template: `
    <movie-display *ngFor="#currentMovie of movieList"
      (click)="movieClicked(currentMovie)"
      [class.selected]="currentMovie === selectedMovie"
      [movie]="currentMovie">
    </movie-display>
    <new-movie (onSubmitNewMovie)="createMovie($event)"></new-movie>

  `
})
export class MovieListComponent {
  public movieList: Movie[];
  public onMovieSelect: EventEmitter<Movie>;
  public selectedMovie: Movie;
  constructor() {
    this.onMovieSelect = new EventEmitter();
  }
  movieClicked(clickedMovie: Movie): void {
    console.log('kiddo', clickedMovie);
    this.selectedMovie = clickedMovie;
    this.onMovieSelect.emit(clickedMovie);
  }
  createMovie(newMovie): void {
    this.movieList.push(newMovie);
  }
}
