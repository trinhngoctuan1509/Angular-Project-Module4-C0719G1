import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrlPost: string ="http://localhost:8000/api/posts/all";
  apiUrlSearchBasic: string ="http://localhost:8000/api/posts/searchPostBasic";
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllPosts(): Observable<any> {
    return this.httpClient.get(this.apiUrlPost).pipe(map((response: any) => response));
  }

  postDataSearch(data) {
    return this.httpClient.post(this.apiUrlSearchBasic, data).pipe(map((response: any) => response));
  }

  addPost(data) {
    return this.httpClient.post(this.apiUrlPost, data).pipe(map((response: any) => response));
  }
}
