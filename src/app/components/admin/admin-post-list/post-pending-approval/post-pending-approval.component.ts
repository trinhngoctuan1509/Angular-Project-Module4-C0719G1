import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Posts } from "../../../../models/post.model";

@Component({
  selector: 'app-post-pending-approval',
  templateUrl: './post-pending-approval.component.html',
  styleUrls: ['./post-pending-approval.component.css']
})
export class PostPendingApprovalComponent implements OnInit {
  postApprovals:Posts[]=[];
  constructor(
    private postService:PostService
  ) { 
    
  }

  ngOnInit() {
    this.postService.getPostApproval().subscribe((data:any)=>{
      this.postApprovals= data
          })
  }

}
