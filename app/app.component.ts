import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <img src="resources/images/logo.jpg" />
      <h1>Video Store</h1>
      <h2>Movies: {{ movie.title }}</h2>
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
}

export class Movie {
  public rented: boolean = false;
  constructor(public title: string, public genre: string, public director: string, public year: string, public rating: string) {

  }
}
