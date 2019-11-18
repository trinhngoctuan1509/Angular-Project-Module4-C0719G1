import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PostOftypeService {
  apiUrlPostOfType: string ="http://localhost:8000/api/postOfType"
  constructor(
    private httpClient: HttpClient
    ) { }

    // Get All PostOfType
    getAllPostOfType(): Observable<any> {
      return this.httpClient.get(this.apiUrlPostOfType).pipe(map((response: any) => response));
    }

    // Get PostOfType By ID
    getPostOfTypeById(id){
      return this.httpClient.get(`${this.apiUrlPostOfType}/${id}`).pipe(map((respone:any)=>respone));
    }
}
