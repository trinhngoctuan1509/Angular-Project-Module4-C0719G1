import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrlCategory: string ="http://localhost:8000/api/categories"
  constructor(
    private httpClient: HttpClient
    ) 
    { }

  getAllCategory(): Observable<any> {
    return this.httpClient.get(this.apiUrlCategory).pipe(map((response: any) => response));
  }
}
