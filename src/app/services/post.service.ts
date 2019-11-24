
import { Injectable } from '@angular/core';
import { Posts } from "../models/post.model";

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrlPost: string = "http://localhost:8000/api/posts";
  apiUrlSearchBasic: string = "http://localhost:8000/api/posts/searchPostBasic";
  getAllPostAPI: string = 'http://127.0.0.1:8000/api/posts';
  searchPostGeneralAPI: string = 'http://127.0.0.1:8000/api/searchPostGeneral';
  searchPostByTitleAPI: string = 'http://127.0.0.1:8000/api/searchPostByTitle';
  searchPostByFengshuiAPI: string = 'http://127.0.0.1:8000/api/searchPostByFengshui';
  getPostApprovalAPI:string= 'http://127.0.0.1:8000/api/getPostApproval'
  getPostAppredAPI:string= 'http://127.0.0.1:8000/api/getPostAppred'




  constructor(
    private httpClient: HttpClient
  ) { }

  getAllPosts(): Observable<any> {

    return this.httpClient.get(this.apiUrlPost+'All').pipe(map((response: any) => response));

  }

  postDataSearch(data) {
    return this.httpClient.post(this.apiUrlSearchBasic, data).pipe(map((response: any) => response));
  }

  addPost(data) {
    return this.httpClient.post(this.apiUrlPost, data).pipe(map((response: any) => response));
  }

  getPostfromId(id): Observable<any>{
    return this.httpClient.get(this.apiUrlPost+'All'+'/'+id).pipe(map((response: any) => response));
  }
  
  getAllPostData(): Observable<any> {
    return this.httpClient.get(this.getAllPostAPI);
  }

  searchPostGeneral(conditionsOfSearchPostGeneral): Observable<any> {
    return this.httpClient.post(this.searchPostGeneralAPI, conditionsOfSearchPostGeneral);
  }

  searchPostByTitle(keywordSearchPostByTitle): Observable<any> {
    return this.httpClient.post(this.searchPostByTitleAPI, keywordSearchPostByTitle);
  }

  searchPostByFengshui(conditionsOfSearchPostByFengshui): Observable<any> {
    return this.httpClient.post(this.searchPostByFengshuiAPI, conditionsOfSearchPostByFengshui);
  }
// get list danh sách bài đăng đang chờ duyệt
  getPostApproval():Observable<any>{
    return this.httpClient.get(this.getPostApprovalAPI).pipe(map((response: any) => response));
  }
// get list danh sách bài đăng đã duyệt
  getPostAppred(){
    return this.httpClient.get(this.getPostAppredAPI).pipe(map((response: any) => response));
  }

  // update bài post
  updatePost(post:Posts){
    return this.httpClient.put(this.apiUrlPost+'/'+post.id,post).pipe(map((response: any) => response));
  }
}
