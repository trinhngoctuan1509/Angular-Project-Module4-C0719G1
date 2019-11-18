import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { PostService } from "../../../services/post.service";
import { RegionService } from "../../../services/region.service";
import { CategoryService } from "../../../services/category.service";
import { MatDialog } from '@angular/material';
import { DialogSearchPostAdvancedComponent } from '../dialog-search-post-advanced/dialog-search-post-advanced.component';
import { SearchPostGeneralService } from '../../../services/search-post-general.service';
import { Router } from '@angular/router';


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
    public dialog: MatDialog,
    private postService: PostService,
    private regionService: RegionService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    public searchPostGeneralService: SearchPostGeneralService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getAllPosts()
    this.createForm()
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogSearchPostAdvancedComponent,
      {
        width: '650px',
        disableClose: true,
        data: { name: 'Trinh Ngoc Tuan' }
      })
  }
}
