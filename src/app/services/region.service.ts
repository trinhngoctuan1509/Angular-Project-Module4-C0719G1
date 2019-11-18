import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class RegionService {
  apiUrlRegion: string ="http://localhost:8000/api/region"
  constructor(
    private httpClient: HttpClient
    ) { }
    getAllRegions(): Observable<any> {
      return this.httpClient.get(this.apiUrlRegion).pipe(map((response: any) => response));
    }

    getRegionById(id){
      return this.httpClient.get(`${this.apiUrlRegion}/${id}`).pipe(map((respone:any)=>respone));
    }
}
