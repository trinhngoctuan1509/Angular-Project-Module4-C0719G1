import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-post-by-fengshui',
  templateUrl: './search-post-by-fengshui.component.html',
  styleUrls: ['./search-post-by-fengshui.component.css']
})
export class SearchPostByFengshuiComponent implements OnInit {

  public formSearchByFengshui: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formSearchByFengshui = this.formBuilder.group({
      yearOfBirth: ['1990'],
      gender: ['1']
    })
  }

  searchByFengshui() {
    console.log(this.formSearchByFengshui.value);
  }

}
