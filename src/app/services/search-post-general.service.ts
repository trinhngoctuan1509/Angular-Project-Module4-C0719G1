import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchPostGeneralService {

  public searchPostGeneralResult = new Subject<any>();
  searchPostGeneralResultValue = this.searchPostGeneralResult.asObservable();

  constructor() { }

  sendData(data: any) {
    this.searchPostGeneralResult.next(data);
  }
}
