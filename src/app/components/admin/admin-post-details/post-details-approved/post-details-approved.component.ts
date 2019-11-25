import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Posts } from 'src/app/models/post.model';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-post-details-approved',
  templateUrl: './post-details-approved.component.html',
  styleUrls: ['./post-details-approved.component.css']
})
export class PostDetailsApprovedComponent implements OnInit {
  postDetails;
  id;
  constructor(
    private postService: PostService,
    private activateRouter: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.postDetails = new Posts;
    this.activateRouter.params.subscribe(params => {
      this.id = params['id']
    })
    this.postService.getPostfromId(this.id).subscribe(data => {
      this.postDetails = data;
    })
  }
  changeAvailability() {
    this.postDetails.post_availability_status_id = 3;
    this.postService.updatePost(this.postDetails).subscribe(data => {
      this.router.navigateByUrl('/admin/post-approved');
    })
  }
}
