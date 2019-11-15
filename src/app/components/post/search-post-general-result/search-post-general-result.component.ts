import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { PostService } from "../../../services/post.service";
import { RegionService } from "../../../services/region.service";
import { CategoryService } from "../../../services/category.service";
import { MatDialog } from '@angular/material';
import { DialogSearchPostAdvancedComponent } from '../dialog-search-post-advanced/dialog-search-post-advanced.component';

@Component({
  selector: 'app-search-post-general-result',
  templateUrl: './search-post-general-result.component.html',
  styleUrls: ['./search-post-general-result.component.css']
})
export class SearchPostGeneralResultComponent implements OnInit {
  posts = null;
  regions;
  categories;
  formSearchPostBasic: FormGroup
  constructor(
    public dialog: MatDialog,
    private postService: PostService,
    private regionService: RegionService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogSearchPostAdvancedComponent,
      {
        width: '650px',
        disableClose: true,
        data: { name: 'Trinh Ngoc Tuan' }
      });
  }

}
