import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {editUsers  } from "src/app/models/editUsers";



import {Observable} from "rxjs";
import { of } from "rxjs";
import { catchError,map,tap } from 'rxjs/operators'; 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EditUsersService {
  public editAPI='http://127.0.0.1:8000/api/getUserById';
  public sendHelpMessageAPI='http://127.0.0.1:8000/api/editUser';

  constructor(private http:HttpClient) { }

  // getUsersfromId(id): Observable<any>{
  //   return this.http.get(this. editAPI+'/'+id).pipe(map((response: any) => response));
  // }
  
  getEditUsers(id){
    var editUsers= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
  
   return this.http.get(this.editAPI+'/'+id,{headers : editUsers})
  }
  // updateeditusers(editusers: editUsers ): Observable<any> {
   
  //   return this.http.put(`${this.editAPI}/${editusers.id}`, editusers, httpOptions).pipe(
  //     tap(updatedusers => console.log(`updated users = ${JSON.stringify(updatedusers)}`)),
  //     catchError(error => of(new editUsers ()))
  //   );
  // }
  sendEditUsersMessage(message):Observable<any>{
    return this.http.post(this.sendHelpMessageAPI, message);
  }
 
}
