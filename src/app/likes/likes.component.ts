import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  numberOfLikes:number =0;
  numberOfDislikes:number=0;

  likeButtonClick(){
    this.numberOfLikes++;
  }
  dislikeButtonClick(){
    this.numberOfDislikes++;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
