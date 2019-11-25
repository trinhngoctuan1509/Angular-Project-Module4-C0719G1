import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { PostCommentComponent } from './components/post/post-comment/post-comment.component';
// import { LoginAdminComponent } from './components/login-admin/login-admin.component';
// import { HelpComponent } from './components/help/help.component';
// import { EditUsersComponent } from './components/edit-users/edit-users.component';
// import { ChangePasswordComponent } from './components/change-password/change-password.component';




@NgModule({
  declarations: [
    AppComponent,
    PostCommentComponent,
    // LoginAdminComponent,
    // // HelpComponent,
    // EditUsersComponent,
    // ChangePasswordComponent
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
