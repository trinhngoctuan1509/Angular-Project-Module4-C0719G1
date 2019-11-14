import { Component, OnInit ,Input} from '@angular/core';
import { Commentpost } from "src/app/models/commentmodels";
import {CommentserviceService  } from "src/app/services/commentservice.service";
import { ActivatedRoute } from '@angular/router';
import { PostService } from "src/app/services/post.service";
import { Posts } from "src/app/models/post.model";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
   public commentposts:Commentpost[];
  @Input() post:Posts;

  constructor(
    private route:ActivatedRoute,
    private commentpostservice:CommentserviceService,
    private postserve:PostService

  ) { }
  getcommentpostFromServices(): void {
    //this.movies = this.movieService.getMovies();
    this.commentpostservice.getcommentpost().subscribe(updatedCommentpost => {
      this.commentposts = updatedCommentpost
      console.log(updatedCommentpost)
    });
  }
  getPostFromroute():void{
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.postserve.getPostfromId(id).subscribe(post => this.post= post); 

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
    this.post=new Posts;
  }

}
