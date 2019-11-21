import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }

}
