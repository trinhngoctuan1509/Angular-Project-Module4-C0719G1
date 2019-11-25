import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-user-detail',
  templateUrl: './admin-user-detail.component.html',
  styleUrls: ['./admin-user-detail.component.css']
})
export class AdminUserDetailComponent implements OnInit {
  id: number;
  user;

  constructor(
    public userService: UserService,
    public activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      this.userService.getUserById(data['id']).subscribe(data => {
        this.user = data[0];
        console.log(this.user);
      })
    });

  }

}
