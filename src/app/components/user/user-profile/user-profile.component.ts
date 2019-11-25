import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../services/login.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { PostAuthUserService } from "../../../services/Auth/post-auth-user.service";
import { User } from "../../../models/user.model";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  formSearch : FormGroup
  userDetail;
  PostByUser;
  constructor(
    private loginService:LoginService,
    private postAuthUserService: PostAuthUserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userDetail = new User();
    this.getUserDeltail();
    this.getPostByUser();
    this.formSearch = this.formBuilder.group({
      searchWord : ['']
    })
  }

  getUserDeltail(){
    this.loginService.getUser().subscribe(data=>{
      this.userDetail = data
      console.log(data)
    })
  }

  getPostByUser(){
    this.postAuthUserService.getPostByUser().subscribe(data=>{
      this.PostByUser = data
    })
  }

  deletePost(id){
    if(confirm("Bạn có chắc chắn xóa ?")){
      this.postAuthUserService.deletePost(id).subscribe(data =>{
        this.getPostByUser()
      });
    }  
  }
  onClickSearch(){
    this.postAuthUserService.searchTitlePost(this.formSearch.value).subscribe(data=>{
      this.PostByUser = data
    })
    
  }
}
