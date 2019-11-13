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

const appRoutes: Routes = [
  { path: 'post', component: PostComponent },
]

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostAddComponent,
    PostEditComponent,
    PostDetailComponent,
    PostSearchAdvancedComponent],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],

  entryComponents: [],

  exports: [RouterModule]
})
export class AppRoutingModule { }
