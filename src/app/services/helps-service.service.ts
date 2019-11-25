import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class HelpsServiceService {
  public sendHelpMessageAPI='http://127.0.0.1:8000/api/helps';
  constructor(private http: HttpClient) { }

  sendHelpMessage(message):Observable<any>{
    return this.http.post(this.sendHelpMessageAPI, message);
  }
}
