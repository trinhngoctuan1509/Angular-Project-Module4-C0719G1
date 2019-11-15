import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-post-general',
  templateUrl: './search-post-general.component.html',
  styleUrls: ['./search-post-general.component.css']
})
export class SearchPostGeneralComponent implements OnInit {

  public formSearchAdvanced: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formSearchAdvanced = this.formBuilder.group({
      categoryId: ['0'],
      regionId: ['0'],
      sellerId: ['0'],
      postOfTypeId: ['0'],
      statusId: ['0'],
      areaRangeId: ['0'],
      priceRangeId: ['0'],
      directionId: ['0'],
      ableComposition: [false]
    })
  }

  searchAdvanced() {
    console.log(this.formSearchAdvanced.value);
  }

}
