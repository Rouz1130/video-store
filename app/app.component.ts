import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'movie-list',
  inputs: ['movieList'],
  outputs: ['onMovieSelect'],
  template: `
  <div *ngFor="#currentMovie of movieList" (click)="movieClicked(currentMovie)">
    <h3>{{ currentMovie.title }}</h3>
    <ul>
      <li>{{ currentMovie.genre }}</li>
      <li>{{ currentMovie.year }}</li>
      <li>{{ currentMovie.rating }}</li>
      <li>directed by: {{ currentMovie.director }}</li>
    </ul>
  </div>
  `
})
export class MovieListComponent {
  public movieList: Movie[];
  public onMovieSelect: EventEmitter<Movie>;
  constructor() {
    this.onMovieSelect = new EventEmitter();
  }
  movieClicked(clickedMovie: Movie): void {
    console.log('kiddo', clickedMovie);
    this.onMovieSelect.emit(clickedMovie);
  }
}

@Component({
  selector: 'my-app',
  directives: [MovieListComponent],
  template:`
    <div class="container">
      <img src="resources/images/logo.jpg" />
      <h1>Video Store</h1>
      <movie-list
        [movieList]="movies"
        (onMovieSelect)="movieSelected($event)">
      </movie-list>
    </div>
  `
})
export class AppComponent {
  public movies: Movie[];
  constructor(){
    this.movies = [
      new Movie("All About Eve", "Drama", "Joseph L. Mankiewicz", "1951", "N/A"),
      new Movie("Mad Max Fury Road", "Action", "George Miller", "2015", "R"),
      new Movie("Network", "Drama", "Sidney Lumet", "1977", "R"),
      new Movie("The Goonies", "Action", "Richard Donner", "1985", "PG"),
      new Movie("Six Degrees of Separation", "Drama", "Fred Schepsi", "1993", "R"),
    ]
  }
  movieSelected(clickedMovie: Movie): void {
    console.log('parent', clickedMovie)
  }
}

export class Movie {
  public rented: boolean = false;
  constructor(public title: string, public genre: string, public director: string, public year: string, public rating: string) {

  }
}
