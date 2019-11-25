import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Posts } from 'src/app/models/post.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup } from "@angular/forms";

@Component({
  selector: 'app-post-approved',
  templateUrl: './post-approved.component.html',
  styleUrls: ['./post-approved.component.css']
})
export class PostApprovedComponent implements OnInit {
  postAppreds:Posts[]=[];
  postDetail;
  formSearch:FormGroup;
  constructor(
    private postService:PostService,
    private activateRouter:ActivatedRoute,
    private _FormBuider:FormBuilder
  ) { }

  ngOnInit() {
    this.search();
    this.postService.getPostAppred().subscribe(data=>{
      this.postAppreds=data
      })
  }
  changeAvailability(postDetails){
    this.postDetail = new Posts;
    this.postService.getPostfromId(postDetails.id).subscribe(data => {
      this.postDetail = data
    })
    postDetails.post_availability_status_id=3;
    this.postService.updatePost(postDetails).subscribe(data=>{
      console.log(data)
    })
  }
search(){
  this.formSearch = this._FormBuider.group({
    title:['']
  })
}
onClickSearch(){
  this.postService.searchPostAppred(this.formSearch.value).subscribe(data=>{
    this.postAppreds=data.data
  })
}

}
