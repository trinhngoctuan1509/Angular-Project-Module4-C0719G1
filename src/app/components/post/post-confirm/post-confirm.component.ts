import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { PostService } from "../../../services/post.service";
@Component({
  selector: 'app-post-confirm',
  templateUrl: './post-confirm.component.html',
  styleUrls: ['./post-confirm.component.css']
})
export class PostConfirmComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PostConfirmComponent>,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

  // Click Cancel
  onClickBack() {
    this.dialogRef.close();
  }

  // Click Add new Post
  onClickAdd() {
    this.postService.addPost(this.data).subscribe(data => {
      window.location.href = 'post/add/success';
    })

  }
}
