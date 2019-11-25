import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { PostCommentComponent } from './components/post/post-comment/post-comment.component';
<<<<<<< HEAD
// import { LoginAdminComponent } from './components/login-admin/login-admin.component';
// import { HelpComponent } from './components/help/help.component';
// import { EditUsersComponent } from './components/edit-users/edit-users.component';
// import { ChangePasswordComponent } from './components/change-password/change-password.component';



=======
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminUserDetailComponent } from './components/admin/admin-user-detail/admin-user-detail.component';
>>>>>>> 67de213e9baa41d54c350a7ba91df4e2366a3fd1

@NgModule({
  declarations: [
    AppComponent,
    PostCommentComponent,
<<<<<<< HEAD
    // LoginAdminComponent,
    // // HelpComponent,
    // EditUsersComponent,
    // ChangePasswordComponent
=======
    AdminHomeComponent,
    AdminUserDetailComponent
>>>>>>> 67de213e9baa41d54c350a7ba91df4e2366a3fd1
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
