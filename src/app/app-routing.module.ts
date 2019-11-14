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
import { PostSearchAdvancedComponent } from './components/post/post-search-advanced/post-search-advanced.component';
import { MaterialModule } from './material/material.module';
import { PostConfirmComponent } from './components/post/post-confirm/post-confirm.component';

const appRoutes: Routes = [
  { path: 'post', component: PostComponent },
  { path: 'post/add', component: PostAddComponent },
  { path: 'post/list', component: PostListComponent },
  { path: 'commentpost', component: PostDetailComponent},
]

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostAddComponent,
    PostEditComponent,
    PostDetailComponent,
    PostSearchAdvancedComponent,
    PostConfirmComponent],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],

  entryComponents: [PostConfirmComponent],

  exports: [RouterModule]
})
export class AppRoutingModule { }
