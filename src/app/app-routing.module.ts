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
import { RegisterComponent } from './components/Register/register.component';
import { PostConfirmComponent } from './components/post/post-confirm/post-confirm.component';
import { PostSuccessComponent } from './components/post/post-success/post-success.component';
import { AdminUserListComponent } from './components/admin/admin-user-list/admin-user-list.component';
import { AdminLockUserComponent } from './components/admin/admin-lock-user/admin-lock-user.component';
import { AdminUnlockUserComponent } from './components/admin/admin-unlock-user/admin-unlock-user.component';





import { DemoButtonSearchPostAdvancedComponent } from './components/post/demo-button-search-post-advanced/demo-button-search-post-advanced.component';
import { DialogSearchPostAdvancedComponent } from './components/post/dialog-search-post-advanced/dialog-search-post-advanced.component';
import { SearchPostByTitleComponent } from './components/post/search-post-by-title/search-post-by-title.component';
import { SearchPostByFengshuiComponent } from './components/post/search-post-by-fengshui/search-post-by-fengshui.component';
import { SearchPostGeneralComponent } from './components/post/search-post-general/search-post-general.component';
import { SuccessRegisterComponent } from './components/Register/success-register/success-register.component';

import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminUserDetailComponent } from './components/admin/admin-user-detail/admin-user-detail.component';


const appRoutes: Routes = [
  { path: 'post/add', component: PostAddComponent },
  { path: 'post/list', component: PostListComponent },

  { path: 'detailpost/:id', component: PostDetailComponent },
  { path: 'post', component: PostComponent },
  { path: 'commentpost', component: PostDetailComponent },
  { path: 'login', component: LoginUsersComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'successRegister', component: SuccessRegisterComponent },
  { path: 'post/btnSearchPostAdvanced', component: DemoButtonSearchPostAdvancedComponent },
  { path: 'searchPostGeneral', component: SearchPostGeneralComponent, outlet: 'searchPostAdvanced' },
  { path: 'searchByTitile', component: SearchPostByTitleComponent, outlet: 'searchPostAdvanced' },
  { path: 'searchByFengshui', component: SearchPostByFengshuiComponent, outlet: 'searchPostAdvanced' },
  { path: 'post/add/success', component: PostSuccessComponent },
  {
    path: 'admin', component: AdminHomeComponent,
    children: [
      { path: 'user-list', component: AdminUserListComponent },
      { path: 'user-detail/:id', component: AdminUserDetailComponent },
    ]
  },

  { path: '**', redirectTo: 'post/list', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostAddComponent,
    PostEditComponent,
    PostDetailComponent,
    LoginUsersComponent,
    RegisterComponent,
    PostConfirmComponent,
    DemoButtonSearchPostAdvancedComponent,
    DialogSearchPostAdvancedComponent,
    SearchPostByTitleComponent,
    SearchPostByFengshuiComponent,
    SearchPostGeneralComponent,
    PostSuccessComponent,
    SuccessRegisterComponent,
    AdminUserListComponent,
    AdminLockUserComponent,
    AdminUnlockUserComponent
  ],


  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(appRoutes)
  ],

  entryComponents: [
    PostConfirmComponent,
    DialogSearchPostAdvancedComponent,
    AdminLockUserComponent,
    AdminUnlockUserComponent
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
