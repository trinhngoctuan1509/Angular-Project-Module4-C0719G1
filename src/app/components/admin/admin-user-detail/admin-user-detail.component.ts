import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLockUserComponent } from '../admin-lock-user/admin-lock-user.component';
import { AdminUnlockUserComponent } from '../admin-unlock-user/admin-unlock-user.component';

@Component({
  selector: 'app-admin-user-detail',
  templateUrl: './admin-user-detail.component.html',
  styleUrls: ['./admin-user-detail.component.css']
})
export class AdminUserDetailComponent implements OnInit {
  user;
  posts;

  constructor(
    public userService: UserService,
    public activateRoute: ActivatedRoute,
    public postService: PostService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log('khoi chay trang admin user detail')
    this.activateRoute.params.subscribe(data => {
      this.userService.getUserById(data['id']).toPromise().then(data => {
        this.user = data[0];
        console.log(this.user);
        this.postService.getAllPostOfUserByUserId(this.user.id).toPromise().then(data => {
          this.posts = data;
          console.log(this.posts);
        });
      });
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminLockUserComponent, {
      width: '500px',
      data: {
        userId: this.user.id,
        userName: this.user.fullName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(AdminUnlockUserComponent, {
      width: '500px',
      data: {
        userId: this.user.id,
        userName: this.user.fullName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
}
