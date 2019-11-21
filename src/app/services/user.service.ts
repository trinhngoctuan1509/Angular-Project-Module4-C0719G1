import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAllUsersAPI: string = 'http://127.0.0.1:8000/api/getAllUsers';
  getUserByIdAPI: string = 'http://127.0.0.1:8000/api/getUserById';

  constructor(
    public http: HttpClient
  ) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.getAllUsersAPI);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(this.getUserByIdAPI + '/' + id);
  }
}
