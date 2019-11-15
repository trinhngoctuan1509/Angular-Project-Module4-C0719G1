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
   public id;
   
  @Input() postdetail:Posts;
  

  constructor(
    private route:ActivatedRoute,
    private commentpostservice:CommentserviceService,
    private postserve:PostService

  ) { 
   this.getPostFromroute();
  }
  getcommentpostFromServices(): void {
    //this.movies = this.movieService.getMovies();
    this.commentpostservice.getcommentpost().subscribe(updatedCommentpost => {
      this.commentposts = updatedCommentpost
      
     
    });
  }
  getPostFromroute():void{
    this.route.params.subscribe(data=>{
      this.id=data['id'],console.log(this.id)
    })
    this.postserve.getPostfromId(this.id).subscribe(post => {
      this.postdetail= post, console.log(this.postdetail)
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
    this.postdetail=new Posts;
  }

}
