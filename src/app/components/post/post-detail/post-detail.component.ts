import { Component, OnInit } from '@angular/core';
import { Commentpost } from "src/app/models/commentmodels";
import {CommentserviceService  } from "src/app/services/commentservice.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  commentposts:Commentpost[];

  constructor(
    private commentpostservice:CommentserviceService
  ) { }
  getcommentpostFromServices(): void {
    //this.movies = this.movieService.getMovies();
    this.commentpostservice.getcommentpost().subscribe(updatedCommentpost => {
      this.commentposts = updatedCommentpost
      console.log(updatedCommentpost)
    });
  }
  ngOnInit() {
    this.getcommentpostFromServices();
  }

}
