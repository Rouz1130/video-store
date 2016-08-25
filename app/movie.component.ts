import { Component } from 'angular2/core';
import { Movie } from './movie.model';

@Component({
  selector: 'movie-display',
  inputs: ['movie'],
  template: `
      <h3>{{ movie.title }}</h3>
      <ul>
        <li>{{ movie.genre }}</li>
        <li>{{ movie.year }}</li>
        <li>{{ movie.rating }}</li>
        <li>directed by: {{ movie.director }}</li>
      </ul>
    `
})
export class MovieComponent {
  public movie: Movie;
}
