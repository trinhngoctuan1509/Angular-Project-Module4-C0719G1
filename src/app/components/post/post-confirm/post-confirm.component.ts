import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { PostService } from "../../../services/post.service";
import { DirectionService } from "../../../services/direction.service";
import { PostOftypeService } from "../../../services/post-of-type.service";
import { SellerService } from "../../../services/seller.service";
import { StatusOfPostService } from "../../../services/status-of-post.service";
import { CategoryService } from "../../../services/category.service";
import { RegionService } from "../../../services/region.service";
@Component({
  selector: 'app-post-confirm',
  templateUrl: './post-confirm.component.html',
  styleUrls: ['./post-confirm.component.css']
})
export class PostConfirmComponent implements OnInit {
  direction;
  postOftype;
  seller;
  statusOfPost;
  category;
  region;
  err;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PostConfirmComponent>,
    private router: Router,
    private postService: PostService,
    private directionService: DirectionService,
    private postOftypeService: PostOftypeService,
    private sellerService: SellerService,
    private statusOfPostService: StatusOfPostService,
    private categoryService: CategoryService,
    private regionService: RegionService,
  ) { }

  ngOnInit() {
    this.getAllInputPost()
  }

  // Click Cancel
  onClickBack() {
    this.dialogRef.close();
  }

  // Click Add new Post
  onClickAdd() {
    this.postService.addPost(this.data).subscribe(data => {
      window.location.href = 'post/add/success';
    }, error =>{
      this.err = error.error.errors
    })
  }

  // Get All Input Post through Variable Data -- MAT_DIALOG_DATA
  getAllInputPost() {
    this.directionService.getDirectionById(this.data.directionId).subscribe(result => {
      this.direction = result.directionName
    })

    this.postOftypeService.getPostOfTypeById(this.data.postOfTypeId).subscribe(result => {
      this.postOftype = result.postOfTypeName
    })


    this.sellerService.getSellerById(this.data.sellerId).subscribe(result => {
      this.seller = result.sellerName
    })


    this.statusOfPostService.getStatusOfPostId(this.data.statusOfPostId).subscribe(result => {
      this.statusOfPost = result.statusOfPostName
    })


    this.categoryService.getCategoryById(this.data.categoryId).subscribe(result => {
      this.category = result.categoryName
    })


    this.regionService.getRegionById(this.data.regionId).subscribe(result => {
      this.region = result.regionName
    })
  }
}
