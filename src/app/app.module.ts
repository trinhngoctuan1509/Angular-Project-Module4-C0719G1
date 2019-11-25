import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { PostCommentComponent } from './components/post/post-comment/post-comment.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminUserDetailComponent } from './components/admin/admin-user-detail/admin-user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PostCommentComponent,
    AdminHomeComponent,
    AdminUserDetailComponent
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
