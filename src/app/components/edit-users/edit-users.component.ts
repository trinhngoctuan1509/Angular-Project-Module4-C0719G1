import { Component, OnInit ,Input} from '@angular/core';
import { Route, ActivatedRoute} from "@angular/router";
import { EditUsersService } from "src/app/services/edit-users.service";
import { editUsers } from "src/app/models/editUsers";
import { LoginService } from "../../services/login.service";

import { Location } from '@angular/common';//de goback chuyen ve mang hinh phia truoc


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  public id;
  public editusers:editUsers;
  public errors;

  constructor(
    private route: ActivatedRoute,
    private EditUsersService:EditUsersService,
    private location: Location,
    private loginService:LoginService
    
  
  ) { }

  ngOnInit() {
    this.editusers= new editUsers();
  this.getUser();


  }
  getUser(){
    this.loginService.getUser().subscribe((data:any)=>{
      this.editusers=data,console.log(this.editusers)
    })
  }

  savecheck(): void {

    console.log(this.editusers)
     this.EditUsersService.sendchangepassword( this.editusers).
     subscribe(() => this.goBack()),
     error=>{

      this.errors= error.error.errors;
      
     };
}
goBack(): void {
  this.location.back();
}

}
