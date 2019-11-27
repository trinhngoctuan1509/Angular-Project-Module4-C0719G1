import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {editUsers  } from "src/app/models/editUsers";



import {Observable} from "rxjs";
import { of } from "rxjs";
import { catchError,map,tap } from 'rxjs/operators'; 
import { User } from '../models/user.model';
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };


@Injectable({
  providedIn: 'root'
})
export class EditUsersService {
  public editAPI='http://127.0.0.1:8000/api/getUserById';
  public sendHelpMessageAPI='http://127.0.0.1:8000/api/editUsers';
  public editUsersAPI='http://127.0.0.1:8000/api/updateedit';

  constructor(private http:HttpClient) { }

  // getUsersfromId(id): Observable<any>{
  //   return this.http.get(this. editAPI+'/'+id).pipe(map((response: any) => response));
  // }
  
  getEditUsers(id){
    // var editUsers= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
  
   return this.http.get(this.editAPI+'/'+id)
  }
  
  sendEditUsersMessage(message:editUsers)
  {
    return this.http.put(this.sendHelpMessageAPI+'/'+message.id, message).pipe(map((response: any) => response));
  }



  sendchangepassword(message:editUsers)
  {
    var tokenHeader= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.post(this. editUsersAPI, message,{headers : tokenHeader}).pipe(map((response: any) => response));
  }
 
}
