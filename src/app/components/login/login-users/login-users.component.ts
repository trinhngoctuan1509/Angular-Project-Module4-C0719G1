import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import { Router,ActivatedRoute } from "@angular/router";
import { LoginService } from "../../../services/login.service";

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {
public formLogin:FormGroup;
  constructor(
    private _FormBuilder:FormBuilder,
    private loginService:LoginService
  ) { 
    this.login();
  }

  ngOnInit() {
  }
  login(){
    this.formLogin = this._FormBuilder.group({
      email: [''],
      password: ['']
    })
    this.formLogin.valueChanges.subscribe(data=>{
      console.log(data)
    })
  }
  onClickLogin(){
this.loginService.login(this.formLogin.value).subscribe(data=>{
  console.log(data)
})
  }

}
