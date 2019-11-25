import { Component, OnInit ,Input} from '@angular/core';
import { Route, ActivatedRoute} from "@angular/router";
import { EditUsersService } from "src/app/services/edit-users.service";
import { editUsers } from "src/app/models/editUsers";

import { Location } from '@angular/common';//de goback chuyen ve mang hinh phia truoc


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  public id;
  editusers;
  fullNameNew;
  addressNew;
  phoneNumberNew;

  constructor(
    private route: ActivatedRoute,
    private EditUsersService:EditUsersService,
    private location: Location
    
  
  ) { }

  ngOnInit() {
    this.editusers= new editUsers();
   this.getUsersFromroute();


  }
   getUsersFromroute():void{
    this.route.params.subscribe(data=>{
      this.id=data['id'],console.log(this.id)
    })
    this.EditUsersService.getEditUsers(this.id).subscribe((data:any)=>{
      
      this.editusers=data['0'];
      console.log(this.editusers)
    });
     
  }
  
  save(): void {
    var infoOfUserNew = {
      "userId": this.id,
      "fullNameNew": this.fullNameNew,
      "phoneNumberNew": this.phoneNumberNew,
      "addressNew": this.addressNew
    }

    this.EditUsersService.sendEditUsersMessage(infoOfUserNew).subscribe(() => this.goBack());
    
  }
  goBack(): void {
    this.location.back();
  }
 

}
