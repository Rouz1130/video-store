import { Movie } from './movie.model';
import { Component, EventEmitter } from 'angular2/core';
import { MovieListComponent } from './movie-list.component';

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
      new Movie("All About Eve", "Hilarious Drama", "Joseph L. Mankiewicz", "1951", "N/A"),
      new Movie("Mad Max Fury Road", "Feminist Action", "George Miller", "2015", "R"),
      new Movie("Network", "Modern Media Parable", "Sidney Lumet", "1977", "R"),
      new Movie("The Goonies", "Kids on Bikes", "Richard Donner", "1985", "PG"),
      new Movie("Six Degrees of Separation", "Bildungsroman", "Fred Schepsi", "1993", "R"),
      new Movie("Fargo", "Hyper-Violent Comedy", "Ethan Coen, Joel Coen", "1996", "R"),
      new Movie("Chinatown", "Post-Noir", "Roman Polanski", "1974", "R"),
      new Movie("A Simple Plan", "Bad Choices", "Sam Raimi", "1998", "R"),
      new Movie("All About My Mother", "Psycho-Sexual Drama", "Pedro Almodovar", "1999", "R"),
      new Movie("The Piano", "Fancy-Drama", "Jane Campion", "1993", "R"),
      new Movie("Dick Tracy", "Proto-Comics", "Warren Beatty", "1990", "PG"),
      new Movie("Spy", "Filthy Action-Comedy", "Paul Feig", "2015", "R"),
      new Movie("Kings of Summer", "Bildungsroman", "Jordan Vogt-Roberts", "2013", "R")
    ];
  }
  movieSelected(clickedMovie: Movie): void {
    console.log('parent', clickedMovie)
  }
}
