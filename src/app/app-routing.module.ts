import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';


import { PostComponent } from './components/post/post/post.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostAddComponent } from './components/post/post-add/post-add.component';
import { PostEditComponent } from './components/post/post-edit/post-edit.component';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';
import { MaterialModule } from './material/material.module';
import { LoginUsersComponent } from './components/login/login-users/login-users.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { PostConfirmComponent } from './components/post/post-confirm/post-confirm.component';
import { PostSuccessComponent } from './components/post/post-success/post-success.component';





import { DemoButtonSearchPostAdvancedComponent } from './components/post/demo-button-search-post-advanced/demo-button-search-post-advanced.component';
import { DialogSearchPostAdvancedComponent } from './components/post/dialog-search-post-advanced/dialog-search-post-advanced.component';
import { SearchPostByTitleComponent } from './components/post/search-post-by-title/search-post-by-title.component';
import { SearchPostByFengshuiComponent } from './components/post/search-post-by-fengshui/search-post-by-fengshui.component';
import { SearchPostGeneralComponent } from './components/post/search-post-general/search-post-general.component';
import { SearchPostGeneralResultComponent } from './components/post/search-post-general-result/search-post-general-result.component';


const appRoutes: Routes = [
  { path: 'post/add', component: PostAddComponent },
  { path: 'post/list', component: PostListComponent },
  { path: 'commentpost', component: PostDetailComponent },
  { path: 'login', component: LoginUsersComponent },
  { path: 'singin', component: SingInComponent },
  { path: 'post/btnSearchPostAdvanced', component: DemoButtonSearchPostAdvancedComponent },
  { path: 'post/searchPostGeneral', component: SearchPostGeneralComponent },
  { path: 'post/searchByTitile', component: SearchPostByTitleComponent },
  { path: 'post/searchByFengshui', component: SearchPostByFengshuiComponent },
  { path: 'post/add/success', component: PostSuccessComponent },
  { path: 'post/searchPostGeneralResult', component: SearchPostGeneralResultComponent },
]

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostAddComponent,
    PostEditComponent,
    PostDetailComponent,
    LoginUsersComponent,
    SingInComponent,
    PostConfirmComponent,
    DemoButtonSearchPostAdvancedComponent,
    DialogSearchPostAdvancedComponent,
    SearchPostByTitleComponent,
    SearchPostByFengshuiComponent,
    SearchPostGeneralComponent,
    PostSuccessComponent,
    SearchPostGeneralResultComponent
  ],


  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],

  entryComponents: [
    PostConfirmComponent,
    DialogSearchPostAdvancedComponent
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
