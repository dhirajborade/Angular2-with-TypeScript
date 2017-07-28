import { AuthorsService } from './authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title = 'Title for the authors page';
  authors: string[];

  constructor(authorService: AuthorsService) {
    this.authors = authorService.getAuthors();
  }
  ngOnInit() { }

}
