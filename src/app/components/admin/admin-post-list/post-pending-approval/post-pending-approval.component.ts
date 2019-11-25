import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Posts } from "../../../../models/post.model";
import { FormBuilder,FormGroup } from "@angular/forms";
// import {  } from "@angular/router";

@Component({
  selector: 'app-post-pending-approval',
  templateUrl: './post-pending-approval.component.html',
  styleUrls: ['./post-pending-approval.component.css']
})
export class PostPendingApprovalComponent implements OnInit {
  postApprovals:Posts[]=[];
  formSearch:FormGroup;
  constructor(
    private postService:PostService,
    private _FormBuilder:FormBuilder
  ) { 
    
  }

  ngOnInit() {
    this.search();
    this.postService.getPostApproval().subscribe((data:any)=>{
      this.postApprovals= data
          })
  }
  search(){
    this.formSearch=this._FormBuilder.group({
      title:['']
    })
  }
  onClickSearch(){
    this.postService.searchPostApproral(this.formSearch.value).subscribe(data=>{
      this.postApprovals=data.data
    })
  }

}
