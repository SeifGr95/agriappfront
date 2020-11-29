import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminnavService {

  nav$: Observable<any>;
  private myMethodSubject = new Subject<any>();
  constructor() {  this.nav$ = this.myMethodSubject.asObservable();}
  myMethod(data) {
        this.myMethodSubject.next(data);
    }
}
