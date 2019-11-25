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

import {HelpComponent } from "../app/components/help/help.component";
import { EditUsersComponent } from "../app/components/edit-users/edit-users.component";
import { ChangePasswordComponent} from "../app/components/change-password/change-password.component";
import { LoginAdminComponent } from "../app/components/login-admin/login-admin.component";





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
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { PostPendingApprovalComponent } from './components/admin/admin-post-list/post-pending-approval/post-pending-approval.component';
import { PostApprovedComponent } from './components/admin/admin-post-list/post-approved/post-approved.component';
import { PostDetailsApprovedComponent } from './components/admin/admin-post-details/post-details-approved/post-details-approved.component';
import { PostDetailsPendingApprovalComponent } from './components/admin/admin-post-details/post-details-pending-approval/post-details-pending-approval.component';
import { MainComponent } from './components/main/main.component';


const appRoutes: Routes = [
  {path:'',component:MainComponent,
children:[
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
  { path: 'help', component: HelpComponent},
  { path: 'editusers/:id', component: EditUsersComponent},
  { path: 'changepassword', component: ChangePasswordComponent},
<<<<<<< HEAD
  {path:'loginAdmin',component:LoginAdminComponent},

  
=======
  { path: 'post/add/success', component: PostSuccessComponent },
>>>>>>> 67de213e9baa41d54c350a7ba91df4e2366a3fd1


  { path: 'user/profile', component: UserProfileComponent },
  { path: 'user/profile/post/:id/edit', component: PostEditComponent },
]},
  

  {
    path: 'admin', component: AdminHomeComponent,
    children: [
      { path: 'user-list', component: AdminUserListComponent },
      { path: 'user-detail/:id', component: AdminUserDetailComponent },
      { path: 'post-pending-approval', component: PostPendingApprovalComponent },
      { path: 'post-approved', component: PostApprovedComponent },
      { path: 'post-details-approved/:id', component: PostDetailsApprovedComponent },
      { path: 'post-details-pendding-approval/:id', component: PostDetailsPendingApprovalComponent },
    ]
  },
  { path: '**', redirectTo: 'post/list', pathMatch: 'full' },
  // { path: '', redirectTo: 'post/list'},
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
    AdminUnlockUserComponent,

    UserProfileComponent,
    PostPendingApprovalComponent,
    PostApprovedComponent,
    PostDetailsApprovedComponent,
    PostDetailsPendingApprovalComponent,
    HelpComponent,
    EditUsersComponent,
    ChangePasswordComponent,
<<<<<<< HEAD
    LoginAdminComponent
=======
    MainComponent
>>>>>>> 67de213e9baa41d54c350a7ba91df4e2366a3fd1
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
