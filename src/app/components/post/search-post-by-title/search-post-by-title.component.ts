import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-post-by-title',
  templateUrl: './search-post-by-title.component.html',
  styleUrls: ['./search-post-by-title.component.css']
})
export class SearchPostByTitleComponent implements OnInit {

  public formSearchByTitle: FormGroup

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formSearchByTitle = this.formBuilder.group({
      title: []
    })
  }

  searchByTitle() {
    console.log(this.formSearchByTitle.value)
  }

}
