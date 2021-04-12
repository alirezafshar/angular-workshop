import { Component, OnInit } from '@angular/core';
import { Movies } from '../../models/movies.model';

@Component({
  selector: 'app-trackBy',
  templateUrl: './trackBy.component.html',
  styleUrls: ['./trackBy.component.scss'],
})
export class TrackByComponent implements OnInit {
  movies: Movies[] = [];
  mvTitle: string = '';
  mvDir: string = '';

  constructor() {}

  ngOnInit(): void {
    this.refresh();
  }

  addMovie = () => {
    this.movies.unshift({ title: this.mvTitle, director: this.mvDir });
    this.mvTitle = '';
    this.mvDir = '';
  };

  delMovie = (i: any) => {
    this.movies.splice(i, 1);
  };

  refresh = () => {
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore' },
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder' },
      {
        title: 'Captain American: Civil War',
        director: 'Anthony Russo, Joe Russo',
      },
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer' },
      { title: 'Warcraft', director: 'Duncan Jones' },
    ];
  };

  trackByFn = (item: any) => {
    return item.title;
  };
}
