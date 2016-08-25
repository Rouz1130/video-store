import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <img src="resources/images/logo.jpg" />
      <h1>Video Store</h1>
      <div *ngFor="#movie of movies" (click)="movieSelected(movie)">
        <h3>{{ movie.title }}</h3>
        <ul>
          <li>{{ movie.genre }}</li>
          <li>{{ movie.year }}</li>
          <li>{{ movie.rating }}</li>
          <li>directed by: {{ movie.director }}</li>
        </ul>
      </div>
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
    console.log(clickedMovie);
  }
}

export class Movie {
  public rented: boolean = false;
  constructor(public title: string, public genre: string, public director: string, public year: string, public rating: string) {

  }
}
