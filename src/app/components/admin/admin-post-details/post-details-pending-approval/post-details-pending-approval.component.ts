import { Component, OnInit } from '@angular/core';
import { PostService } from "../../../../services/post.service";
import { Posts } from 'src/app/models/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details-pending-approval',
  templateUrl: './post-details-pending-approval.component.html',
  styleUrls: ['./post-details-pending-approval.component.css']
})
export class PostDetailsPendingApprovalComponent implements OnInit {
  postDetails;
  id: number;
  constructor(
    private postService: PostService,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.postDetails = new Posts;
    this.activateRouter.params.subscribe(params => {
      this.id = params['id']
    })
    this.postService.getPostfromId(this.id).subscribe(data => {
      this.postDetails = data
    })
  }

  changeAvailability() {
    this.postDetails.post_availability_status_id = 1;
    this.postService.updatePost(this.postDetails).subscribe(data => {
      console.log(data)
    })
  }

}