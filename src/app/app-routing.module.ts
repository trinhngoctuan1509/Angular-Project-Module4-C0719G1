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

import {HelpComponent } from "../app/components/help/help.component";
import { EditUsersComponent } from "../app/components/edit-users/edit-users.component";
import { ChangePasswordComponent} from "../app/components/change-password/change-password.component";





import { DemoButtonSearchPostAdvancedComponent } from './components/post/demo-button-search-post-advanced/demo-button-search-post-advanced.component';
import { DialogSearchPostAdvancedComponent } from './components/post/dialog-search-post-advanced/dialog-search-post-advanced.component';
import { SearchPostByTitleComponent } from './components/post/search-post-by-title/search-post-by-title.component';
import { SearchPostByFengshuiComponent } from './components/post/search-post-by-fengshui/search-post-by-fengshui.component';
import { SearchPostGeneralComponent } from './components/post/search-post-general/search-post-general.component';
import { SuccessRegisterComponent } from './components/Register/success-register/success-register.component';

import { NgxPaginationModule } from "ngx-pagination";


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

  { path: 'help', component: HelpComponent},
  { path: 'editusers', component: EditUsersComponent},
  { path: 'changepassword', component: ChangePasswordComponent},

  



  // { path: '**', redirectTo: 'post/list', pathMatch: 'full' },
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
    HelpComponent,
    EditUsersComponent,
    ChangePasswordComponent
  ],


  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],

  entryComponents: [
    PostConfirmComponent,
    DialogSearchPostAdvancedComponent
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
