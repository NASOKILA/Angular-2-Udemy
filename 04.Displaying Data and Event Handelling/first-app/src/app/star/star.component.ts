import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  isFavorite : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  clicked(){
    this.isFavorite = !this.isFavorite;
    
    console.log("clicked !")
    console.log(this.isFavorite)

  }

}
