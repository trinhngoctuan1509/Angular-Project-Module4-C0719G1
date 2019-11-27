import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute} from "@angular/router";
import { editUsers } from "src/app/models/editUsers";
import {ChangepasswordService  } from "../../services/changepassword.service";



@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public changepassword:editUsers;
  public errors;

  constructor(
    private route: ActivatedRoute,
    private ChangepasswordServices:ChangepasswordService
  ) { }

  ngOnInit() {
    this.changepassword= new editUsers();
  }
  save(): void {

    console.log(this.changepassword)
     this.ChangepasswordServices.sendchangepassword( this.changepassword).
     subscribe(data=>{
      console.log(data)
     },
     error=>{

      this.errors= error.error.errors;
      
     })
}
}
