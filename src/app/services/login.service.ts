import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public api = "http://127.0.0.1:8000/api/login";
  public apiUser = 'http://127.0.0.1:8000/api/getUser';
  constructor(
    private http: HttpClient
  ) { }
  login(data) {
    return this.http.post(this.api, data);
  }
  getUser(){
    var tokenHeader= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
  
   return this.http.get(this.apiUser,{headers : tokenHeader})
  }
}
