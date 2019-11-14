import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { PostService } from "../../../services/post.service";
import { RegionService } from "../../../services/region.service";
import { CategoryService } from "../../../services/category.service";
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts;
  regions;
  categories;
  formSearchPostBasic: FormGroup
  constructor(
    private postService: PostService,
    private regionService: RegionService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm()
    this.getAllPosts()
    this.getAllRegion()
    this.getAllCategory()
  }
   // Create formControll formSearchPostBasic
   createForm() {
    this.formSearchPostBasic = this.formBuilder.group({
      wordSearch: [''],
      region: [''],
      category: ['']
    })
  }

  // Click on search Basic
  onClickSearchBasic() {
    this.postService.postDataSearch(this.formSearchPostBasic.value).subscribe(data => {
      this.posts = data
      console.log(this.posts)
    })

  }
  getAllPosts() {
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
    })
  }

  getAllRegion() {
    this.regionService.getAllRegions().subscribe(data => {
      this.regions = data;
    })
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
    })
  }

}
