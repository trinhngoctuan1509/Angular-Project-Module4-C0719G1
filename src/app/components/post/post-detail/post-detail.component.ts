import { Component, OnInit } from '@angular/core';
import { Commentpost } from "src/app/models/commentmodels";
import {CommentserviceService  } from "src/app/services/commentservice.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
   public commentposts:Commentpost[];

  constructor(
    private route:ActivatedRoute,
    private commentpostservice:CommentserviceService
  ) { }
  getcommentpostFromServices(): void {
    //this.movies = this.movieService.getMovies();
    this.commentpostservice.getcommentpost().subscribe(updatedCommentpost => {
      this.commentposts = updatedCommentpost
      console.log(updatedCommentpost)
    });
  }
  onadd(userId:number,postId:number,commentContent:string):void {
    const newComment: Commentpost= new Commentpost();
    newComment.userId=userId;
    newComment.postId=postId;
    newComment.commentContent=commentContent;
    
    this.commentpostservice.addCommentpost(newComment).subscribe(insertedComment => {
      console.log(insertedComment)
     });
     
  }
  ngOnInit() {
    this.getcommentpostFromServices();
    
  }

}
