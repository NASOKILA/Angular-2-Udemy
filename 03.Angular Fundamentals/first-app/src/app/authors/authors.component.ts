import { AuthorService } from './author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title : string;
  authors : string[]
  constructor(private authorService : AuthorService) {
  
    this.authors = authorService.getAuthors();
    this.title = `${this.authors.length} Authors`
    
   }

  ngOnInit() {
  }

}
